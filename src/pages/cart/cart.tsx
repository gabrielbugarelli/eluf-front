// react and css
import React from 'react';
import { useSelector } from 'react-redux';
import { Key } from 'react';

// components
import Layout from '../../components/Layout/Layout';

//interface

import { DataStore } from '../../store/CartStore/Cart.store';

// store
import { RootState } from '../../store';

const Cart = () => {
  // redux
  const cart = useSelector((state: RootState)=> state.cart)
  
  return (
    <Layout>
      {cart.map((item:DataStore,key:Key)=>(
        <h1 key={key}>{item.name}</h1>
      ))}
    </Layout>
  );
}

export default Cart;
