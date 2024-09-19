"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("firstName", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="First name"
          />
          <input
            {...register("lastName", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Last name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email address"
          />
          <input
            {...register("phone", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Phone number"
          />
        </div>
        <textarea
          {...register("message", { required: true })}
          className="w-full p-2 border border-gray-300 rounded h-32"
          placeholder="Message"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
          </svg>
        </a>
        {/* Add more social icons here */}
      </div>
    </div>
  );
};

export default ContactFormComponent;
