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
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
    {name:'Lanche', image:'https://tribunademinas.com.br/wp-content/uploads/2021/07/bolinho-de-costela.jpg', price:'2.00', descrition:'Muito gostoso'},
  ]);
  return (
    <Layout>
      <BackgroundImage>
        <ImageHome src={Imagem} />
        <ContainerTitleImagem>
        <p style={{color:'#10B981'}}>E</p>conomic <p style={{color:'#10B981'}}>Lu</p>nch <p style={{color:'#10B981'}}>F</p>ood
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