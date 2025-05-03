import toast from "react-hot-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user && user.email === email && user.password === password) {
      dispatch(login({ email }));
      toast.success("Login successfully");
      navigate("/");
    } else {
      toast.error("Invalid credentials");
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
          <button className='p-3 w-full bg-blue-700 text-white'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
