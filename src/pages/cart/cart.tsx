// react and css
import React from 'react';
import { useSelector } from 'react-redux';
import { Key } from 'react';

// styled-components
import {ContextItemCart} from './s_cart'


// components-cart

// components share
import TitleShare from '../../componentsShare/TitleShare/TitleShare';
import Layout from '../../componentsShare/LayoutShare/LayoutShare';

//interface
import { DataStore } from '../../store/CartStore/Cart.store';

// store
import { RootState } from '../../store';
import ItemCart from '../../components/c_cart/ItemCart/ItemCart';

const Cart = () => {
  // redux
  const cart = useSelector((state: RootState)=> state.cart)
  return (
    <Layout>
      <TitleShare name='Your requests' />
      <ContextItemCart>
        {cart.map((item:DataStore,key:Key)=>(
          <ItemCart dataItemCart={item}/>
        ))}
      </ContextItemCart>
    </Layout>
  );
}

export default Cart;
