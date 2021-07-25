//react
import { React } from "react";
import { useState, useEffect } from 'react';
// components
import Layout from "../../components/Layout/Layout";
import {HeaderCart, ContextCart, ContainerCart} from './s-cart'
import ItemCart from "../../components/ItemCart/ItemCart";

const Cart = (props) => {
  const [data, setData] = useState([
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Muito gostoso', couter:1},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Muito gostoso', couter:1},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Muito gostoso', couter:1},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Muito gostoso', couter:1},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Muito gostoso', couter:1},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Muito gostoso', couter:1},
  ]);
  // useEffect(() => {
  //   setData([props.location.state.data])
    
  // }, []);


  // const [price, setPrice] = useState(0);
  // useEffect(() => {
  //   data.map((item,key)) => (
  //     setPrice(price+data.price)
  //   )
  // }, []);
  

  return (
    <Layout>
      <HeaderCart>
        Seus pedidos
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
        {/* <AllPrice></AllPrice> */}
      </ContextCart>
      

      

          {/* {data.map((item,key) =>(
            <div key={key}>{item.name} - {key}</div>
          ))} */}
        

      
      
    </Layout>
  );
}

export default Cart;
