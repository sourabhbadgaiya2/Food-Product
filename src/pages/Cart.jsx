import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decreaseQty,
  increaseQty,
} from "../redux/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='flex justify-center p-6'>
      <div className='w-[40vw] bg-white rounded shadow-xl text-gray-600 text-md p-4'>
        <h2>Order Summary</h2>

        {cart.map((p) => (
          <div className='' key={p.id}>
            <div className='flex justify-between items-center mb-4 '>
              <h2 className='w-[1vw]'>{p.name}:</h2>
              <p>
                <span> {p.quantity}</span>
              </p>
              <div className=''>
                <button
                  onClick={() => dispatch(increaseQty(p.id))}
                  className='text-2xl mr-3 font-bold text-white py-2 px-4 rounded bg-blue-500'
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQty(p.id))}
                  className='text-2xl font-bold text-white py-2 px-4 rounded bg-pink-500'
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className=''>
          <h2>Total Inr: {total.toFixed(2)}</h2>
        </div>

        <div className=''>
          <button
            onClick={() => dispatch(clearCart(), navigate("/thank-you"))}
            className='bg-blue-600 p-3 text-white rounded mt-7'
          >
            save and continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
