

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/api/login', formData);
      console.log(response.data);
      alert("Login successful");
    } catch (error) {
      console.error('Error logging in:', error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true"/>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='m-5'>
              <label htmlFor="email-address" className="sr-only  ">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required onChange={handleChange} className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
            </div>
            <div className='m-5'>
              <label htmlFor="password" className="sr-only ">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required onChange={handleChange} className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm" placeholder="Password"/>
            </div>
          </div>
          <div className="flex items-center justify-between">
            
            <div className="text-sm">
              <a href="/signup" className="font-medium text-sky-600 hover:text-sky-500">
                Don't Have an Account Register Now
              </a>
            </div>
          </div>
          <div>
            <button type="submit" className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
