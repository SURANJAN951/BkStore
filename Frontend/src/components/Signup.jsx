import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup successful!');
        navigate(from,{replace:true});
      }
      //now we will store the user data in local storage
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        toast.error("Error: "+ err.response.data.message);
      }
    })
  }

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        {/* Modal container with modal visibility triggered by a class */}
        <div id="my_modal_3" className="modal modal-open">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close modal button */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                  type="text" 
                  placeholder='Enter your Full Name' 
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <p className="text-red-500 text-sm">Name is required</p>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder='Enter your Email' 
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type="password" 
                  placeholder='Enter your Password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("password", { required: true })}
                />
                {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
              </div>

              {/* Signup Button and Login Link */}
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                <p>Have an account?</p>
                <button
                  className='underline text-blue-500 cursor-pointer'
                  type="button"
                  onClick={() => document.getElementById("my_modal_3").showModal()
                    
                  }
                >
                  Login
                </button>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
