import toast from "react-hot-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("user"));
    if (existing) {
      toast.error("User Already Exists");
    } else {
      if (password.length === 6) {
        localStorage.setItem("user", JSON.stringify({ email, password }));
        toast.success("Signup successfully");
        navigate("/login");
      } else {
        toast.error("password must be 6 character long");
      }
    }
  };

  return (
    <div className='min-h-screen bg-gray-200 flex justify-center p-6'>
      <div className=''>
        <form onSubmit={handleSubmit} className='w-96 bg-gray-100 rounded p-4'>
          <input
            className='w-full rounded p-2 mb-4 border'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='w-full rounded p-2 mb-4 border'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='p-3 w-full bg-blue-700 text-white'>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
