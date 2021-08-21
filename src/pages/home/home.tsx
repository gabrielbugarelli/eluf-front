// react and css
import React,{Key, useState} from 'react';

// components
import Item from '../../components/c_home/Item/Item'
import ButtonCategory from '../../components/c_home/ButtonCategory/ButtonCategory'

// styled-components
import {
  ContainerItem,
  ContextHome,
  ImageHome,
  BackgroundImage,
  ContainerTitleImagem,
  HeaderItem,
  TitlePage
} from './s_home'

// components-share
import Layout from '../../componentsShare/LayoutShare/LayoutShare'
import TitleShare from '../../componentsShare/TitleShare/TitleShare';

// image
import Imagem from '../../images/imagemHome.jpg'


export interface InData{
  id:number,
  name: string,
  image:string,
  price: number, 
  description:string,
  category:string
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
    {id:1,name:'Prato feito ', image:'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', price:12.00,
    description:
    'Arroz branco, batata frita e picanha assada',category:'Alimento'},
    {id:2,name:'Lanch', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Very delicious, warm for consumption, warm for consumption, warm for consumption, warm for consumption, warm for consumption, tasty and warm for consumption',category:'Alimento'},
    {id:3,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:4,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:5,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:6,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:7,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:8,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:9,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
    {id:10,name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty',category:'Alimento'},
  ]);
  const [category, setCategory] = useState([
    {id:1, name:"Vegetal"},
    {id:2, name: "Frutas"},
    {id:3, name: 'Alimentos'}
  ]);

  return (
    <>
      <BackgroundImage>
        <ImageHome src={Imagem} />
        <ContainerTitleImagem>
          <div style={{width:'100%', backgroundColor:'#6EE7B7', display:'flex', justifyContent:'center', opacity:'0.7'}}>
            <p style={{color:'#10B981'}}>E</p>conomic <p style={{color:'#10B981'}}>Lu</p>nch <p style={{color:'#10B981'}}>F</p>ood
          </div>
        </ContainerTitleImagem>
      </BackgroundImage>
      <Layout>
          <HeaderItem>
            <TitleShare name='Product'/>
            <ButtonCategory data={category} />
          </HeaderItem>
          <ContainerItem>
            {item.map((item:InData, key:Key) =>(
              <Item key={key} dataItem={item} />
            ))}
          </ContainerItem>
      </Layout>
    </>
  );
}

export default Home;
