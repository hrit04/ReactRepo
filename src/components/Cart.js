import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Itemlist from './Itemlist';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {


  const dispatch = useDispatch();   

  const clear = ()=> {
    dispatch(clearCart());
  }

  const cartItem = useSelector((store) => store.cart.items);
  console.log("last", cartItem);
  return (
    <div className='m-4 p-4 text-center'>
      <h1 className='text-2xl font-bold'>Cart</h1>
       <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={()=>{
          clear
        }}>Clear Cart</button>
        <Itemlist Itemdata={cartItem}></Itemlist>
       </div>
    </div>
  )
}

export default Cart