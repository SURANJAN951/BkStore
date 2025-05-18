import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="contact_modal" className="modal modal-open">
        <div className="modal-box">
          {/* Close button */}
          <Link to={"/"}
            type="button"
            onClick={() => document.getElementById('contact_modal').close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Contact Us</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Message Box */}
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              placeholder="Enter your Message"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("message", { required: true })}
            />
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Contact;
