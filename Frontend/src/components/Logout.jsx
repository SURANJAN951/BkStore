import React from 'react'
import { set } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Logout() {
    const [authUser, setAuthUser]=useAuth();
    function handleLogout(){
        try {
            setAuthUser({
                ...authUser,
                user:null,
                
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully")
          setTimeout(() => {
            window.location.reload()
           },3000)
        } catch (error) {
            toast.error("Logout Failed" + error)
            setTimeout(() => {
               },2000)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
