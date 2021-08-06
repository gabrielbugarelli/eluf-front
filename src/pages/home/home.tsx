// react and css
import React,{Key, useState} from 'react';

// components
import Layout from '../../components/Layout/Layout'
import {ContainerItem, ContextHome, ImageHome, BackgroundImage, ContainerTitleImagem, HeaderItem, TitlePage} from './s_home'
import Item from '../../components/Item/Item'

// image
import Imagem from '../../images/imagemHome.jpg'
import TitleData from '../../components/TitleData/TitleData';

// interface Obj{
//   data : InData[]
// }

export interface InData{
  name: string,
  image:string,
  price: number, 
  description:string
}



const Home = () => {
  // [InData]
  const [item, setItem] = useState([
    {name:'Kibe', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00,
    description:
    'quentinho macio e muito em conta'},
    {name:'Lanch', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Very delicious, warm for consumption, warm for consumption, warm for consumption, warm for consumption, warm for consumption, tasty and warm for consumption'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:2.00, description:'Extremely Tasty'},
  ]);
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
          {/* <ButtonCategory /> */}
        </HeaderItem>
        <ContainerItem>
          {item.map((item, key) =>(
            <Item key={key} dataItem={item} />
          ))}
        </ContainerItem>
      </ContextHome>
    </Layout>
  );
}

export default Home;
