//react
import { React } from "react";
import { useState, useEffect } from 'react';
// components
import Layout from "../../components/Layout/Layout";
import {HeaderCart, ContextCart, ContainerCart, Fixed, SubPrice, ButtonCart} from './s-cart'
import ItemCart from "../../components/ItemCart/ItemCart";

const Cart = (props) => {
  const [data, setData] = useState([
    {name:'Kibe', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'3.00', description:'Very soft and stuffed', couter:1},
    {name:'Lunch', image:'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', price:'10.00', description:'Made on Time', couter:1},
    {name:'App', image:'https://images.pexels.com/photos/2949140/pexels-photo-2949140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', price:'3.00', description:'Straight from the tree', couter:1},
    {name:'Pizza', image:'https://images-ext-1.discordapp.net/external/Hd4gsBq_Tk2Slk6ddcyWQXweBs4lqkt0jXd_-4eFf9U/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500/https/images.pexels.com/photos/315755/pexels-photo-315755.jpeg?width=200&height=300', price:'30.00', description:'well stuffed', couter:1},
    {name:'Stuffed bread', image:'https://images-ext-1.discordapp.net/external/P_8wN6CO5F9KQxvRwZvcKxBnwgRffRazU8D34jqrJjc/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500/https/images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?width=400&height=266', price:'5.00', description:'very crispy', couter:1},
    
  ]);
 
  

  return (
    <Layout>
      <HeaderCart>
      Your requests
      </HeaderCart>
      <ContextCart>
        {/* map de itemCart */}
        <ContainerCart>
          <ItemCart data={data[0]}/>
          <ItemCart data={data[1]}/>
          <ItemCart data={data[2]}/>
          <ItemCart data={data[3]}/>
          <ItemCart data={data[4]}/>
        </ContainerCart>
          <Fixed>
            <SubPrice>Total: R$51,00</SubPrice>
            <ButtonCart>Total</ButtonCart>
          </Fixed>
        
      </ContextCart>

    </Layout>
  );
}

export default Cart;
