// react
import { Link } from 'react-router-dom';

// components
import { Container, ContainerIcon, NameIcon } from './s_menu';
import { AiFillHome, AiOutlineShoppingCart,
  AiOutlineUser, AiFillSmile, AiTwotoneEnvironment }
from "react-icons/ai";
import { FaUserAlt, FaShoppingCart} from "react-icons/fa";


const Menu = () => {
  return (
    <Container>
      <ContainerIcon>
        <AiFillSmile style={{fontSize:'30px', color:'white'}}/>
      </ContainerIcon>
      <ContainerIcon>
        <FaShoppingCart style={{fontSize:'30px', color:'white'}}/>
      </ContainerIcon>
      <ContainerIcon >
        <AiFillHome style={{fontSize:'30px', color:'white'}}/>
      </ContainerIcon>
      <ContainerIcon>
        <AiTwotoneEnvironment style={{fontSize:'30px', color:'white'}}/>
      </ContainerIcon>
      <ContainerIcon>
          <FaUserAlt style={{fontSize:'30px', color:'white'}} />
      </ContainerIcon>
    </Container>
  );
}

export default Menu;
