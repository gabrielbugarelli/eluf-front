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
      <Link to='/cause'>
        <ContainerIcon>
          <AiFillSmile style={{fontSize:'30px', color:'white'}}/>
        </ContainerIcon>
      </Link>
      <Link to='/cart'>
        <ContainerIcon>
          <FaShoppingCart style={{fontSize:'30px', color:'white'}}/>
        </ContainerIcon>
      </Link>
      <Link to='/'>
        <ContainerIcon >
          <AiFillHome style={{fontSize:'30px', color:'white'}}/>
        </ContainerIcon>
      </Link>
      <Link to='/map'>
        <ContainerIcon>
          <AiTwotoneEnvironment style={{fontSize:'30px', color:'white'}}/>
        </ContainerIcon>
      </Link>
      <Link to='/user'>
        <ContainerIcon>
            <FaUserAlt style={{fontSize:'30px', color:'white'}} />
        </ContainerIcon>
      </Link>
    </Container>
  );
}

export default Menu;
