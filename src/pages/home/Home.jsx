// react
import { Link } from 'react-router-dom'

// components
import Layout from '../../components/Layout/Layout'
import {ImageHome, BackgroundImage, ContainerTitleImagem} from './s_home'
import Imagem from '../../images/imagemHome.jpg'

const Home = () => {
  return (
    <Layout>
      <BackgroundImage>
        <ImageHome src={Imagem} />
        <ContainerTitleImagem>
          <p style={{color:'#10B981'}}>Economic</p> Lunch Food
        </ContainerTitleImagem>
      </BackgroundImage>
    </Layout>
  );
}

export default Home;