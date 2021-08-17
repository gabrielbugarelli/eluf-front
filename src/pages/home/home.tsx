// react and css
import React,{Key, useState} from 'react';

// components
import Layout from '../../components/Layout/Layout'
import {ContainerItem, ContextHome, ImageHome, BackgroundImage, ContainerTitleImagem, HeaderItem, TitlePage} from './s_home'
import Item from '../../components/Item/Item'
import ButtonCategory from '../../components/ButtonCategory/ButtonCategory'

// image
import Imagem from '../../images/imagemHome.jpg'
import TitleData from '../../components/TitleData/TitleData';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { increment } from '../../store/test/test.store';

export interface InData{
  name: string,
  image:string,
  price: number, 
  description:string
}

export interface ArrayCategory{
  data:InCategory[]
}

export interface InCategory{
  id:number, 
  name:string
}

const Home = () => {
  // [InData]
  const [item, setItem] = useState([
    {name:'Prato feito', image:'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', price:12.00,
    description:
    'Arroz branco, batata frita e picanha assada.',category:'Alimento'},
    {name:'Lanch', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Very delicious, warm for consumption, warm for consumption, warm for consumption, warm for consumption, warm for consumption, tasty and warm for consumption',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
  ]);
  const [category, setCategory] = useState([
    {id:1, name:"Vegetal"},
    {id:2, name: "Frutas"},
    {id:3, name: 'Alimentos'}
  ]);

  const dispath = useDispatch()
  // exemplo selector
  const test = useSelector( (state: RootState) => state.test)
  return (
    <Layout>
      <BackgroundImage>
        <ImageHome src={Imagem} />
        <ContainerTitleImagem>
          <div style={{width:'100%', backgroundColor:'#6EE7B7', display:'flex', justifyContent:'center', opacity:'0.7'}}>
            <p style={{color:'#10B981'}}>E</p>conomic <p style={{color:'#10B981'}}>Lu</p>nch <p style={{color:'#10B981'}}>F</p>ood
          </div>
        </ContainerTitleImagem>
      </BackgroundImage>
      <ContextHome>
        <HeaderItem>
          <TitleData name='Product'/>
          <ButtonCategory data={category} />
        </HeaderItem>
        <div></div>
        <ContainerItem>
          {item.map((item:InData, key:Key) =>(
            <Item key={key} dataItem={item} />
          ))}
        </ContainerItem>
      </ContextHome>
      <div>
        {test.counter}
        <button onClick={()=> dispath(increment())}>clique</button>
      </div>
    </Layout>
  );
}

export default Home;
