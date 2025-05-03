import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";

const Menu = () => {
  const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  return (
    <div className='flex flex-wrap justify-evenly p-6 '>
      {product.map((p, i) => (
        <div
          key={p.id}
          className='shadow-xl bg-gray-200 rounded overflow-hidden mb-4'
        >
          <img className='w-72 h-50' src={`assets/${p.image}`} alt='' />
          <div className='pt-4 px-4 text-gray-600'>
            <h2>{p.name}</h2>
            <p>Price: {p.price}</p>
          </div>
          <div className='p-4'>
            <button
              onClick={() => dispatch(addToCart(p))}
              className='text-2xl mr-3 font-bold text-white py-2 px-4 rounded bg-blue-500'
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeFromCart(p.id))}
              className='text-2xl font-bold text-white py-2 px-4 rounded bg-pink-500'
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
