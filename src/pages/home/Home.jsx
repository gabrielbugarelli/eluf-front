// react
import { Link } from 'react-router-dom'
import {useState} from 'react'
// components
import Layout from '../../components/Layout/Layout'
import {ButtonCategory, ContainerItem, ContextHome, ImageHome, BackgroundImage, ContainerTitleImagem, HeaderItem, TitlePage} from './s_home'
import Imagem from '../../images/imagemHome.jpg'
import Item from '../../components/Item/Item'

const Home = () => {
  const [item, setItem] = useState([
    {name:'Kibe', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00',
    description:
    'Extremely Tasty lore Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {name:'Lanch', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Very delicious, warm for consumption, warm for consumption, warm for consumption, warm for consumption, warm for consumption, tasty and warm for consumption'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
    {name:'Snack', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', description:'Extremely Tasty'},
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
          <TitlePage>
            Product
          </TitlePage>
          {/* <ButtonCategory /> */}
        </HeaderItem>
        <ContainerItem>
          {item.map((item,key) =>(
            <Item key={key} data={item}/>
          ))}
        </ContainerItem>
      </ContextHome>
    </Layout>
  );
}

export default Home;  