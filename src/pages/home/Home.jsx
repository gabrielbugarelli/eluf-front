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
        <p style={{color:'#10B981'}}>E</p>conomic <p style={{color:'#10B981'}}>Lu</p>nch <p style={{color:'#10B981'}}>F</p>ood
        </ContainerTitleImagem>
      </BackgroundImage>
    </Layout>
  );
}

export default Home;