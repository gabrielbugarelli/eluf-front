// react and css
import React,{Key, useState} from 'react';

// components
import Layout from '../../components/Layout/Layout'
import {ContainerItem, ContextHome, ImageHome, BackgroundImage, ContainerTitleImagem, HeaderItem, TitlePage} from './s_home'
import Item from '../../components/Item/Item'

// image
import Imagem from '../../images/imagemHome.jpg'
import TitleData from '../../components/TitleData/TitleData';

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
    'Quentinho macio e muito em conta lorem lorelkfjasdk f kjf akl jdfklj ka sdjfk asjdf kaj dfka sd fkla sfdkja skdjfa ksjf kajsd fkas jdf  fjaks dkf fkaj sdfk ajsdkf ajsk jdfk ajsdkf jaks jdkfj aks jdfkja skd fjkasj dfkajsd kfjaskd jfkasjdfkj askdjf kajs dkfj askdfk ajsk jfkajsdf fkjasdkj k jak sdfkaj sdk jak dsjfk ajsk kajs kdfja kj akf sdjkf '},
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
          {item.map((item:InData, key:Key) =>(
            <Item key={key} dataItem={item} />
          ))}
        </ContainerItem>
      </ContextHome>
    </Layout>
  );
}

export default Home;
