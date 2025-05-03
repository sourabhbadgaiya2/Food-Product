import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/authSlice";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const { items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='bg-blue-500 text-white p-4 flex justify-between items-center text-xl'>
      <Link to={"/"} className='flex gap-2'>
        <img className='' src='assets/restaurant_24px.svg' alt='' />
        Food Restaurent
      </Link>
      <div className=' flex justify-between'>
        {user ? (
          <div className='flex gap-3'>
            <p className='text-xl mr-3'>{user.email}</p>
            {items.length > 0 && (
              <Link to={"/cart"} className='text-xl mr-3 relative'>
                <i class='ri-shopping-cart-2-line'></i>
                <span className='absolute  bg-red-500 text-white text-xs px-1 rounded-full'>
                  {items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </Link>
            )}
            <button onClick={() => dispatch(logout())} className=''>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link className='mr-3' to={"/signup"}>
              Signup
            </Link>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
