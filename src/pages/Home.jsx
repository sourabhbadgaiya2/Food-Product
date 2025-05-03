import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='text-center text-2xl p-10'>
      <h1 className='text-gray-500 text-6xl mb-32'>
        Welcome to Food's <br />
        Kitchen
      </h1>
      <Link to={"/menu"} className='py-2 px-6 bg-blue-800 rounded text-white'>
        Go to menu
      </Link>
    </div>
  );
};

export default Home;
