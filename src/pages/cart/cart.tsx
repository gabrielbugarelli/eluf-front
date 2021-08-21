// react and css
import React from 'react';
import { useSelector } from 'react-redux';
import { Key } from 'react';

// styled-components

// components-cart

// components share
import TitleShare from '../../componentsShare/TitleShare/TitleShare';
import ContextShare from '../../componentsShare/ContentShare/ContentShare';
import Layout from '../../componentsShare/LayoutShare/LayoutShare';

//interface
import { DataStore } from '../../store/CartStore/Cart.store';

// store
import { RootState } from '../../store';

const Cart = () => {
  // redux
  const cart = useSelector((state: RootState)=> state.cart)
  
  return (
    <Layout>
      <ContextShare>
        <TitleShare name='Cart' />



      {/* {cart.map((item:DataStore,key:Key)=>(
        <h1 key={key}>{item.couter}</h1>
      ))} */}
      </ContextShare>
    </Layout>
  );
}

export default Cart;
