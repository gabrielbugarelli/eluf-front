// components
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

//styles
import {UserContainer, Name, Icon, UserDataContainer,UserDataIcon,UserDataDescription } from "./s_user";

//icons
import { AiFillFileText, AiTwotoneEnvironment, AiFillSmile } from "react-icons/ai";
import { BiGame } from "react-icons/bi";

const User = () => {
  return (
    <Layout>
      <UserContainer>
        <Icon>
          <BiGame className='text-3xl'/>
        </Icon>
        <Name>
          Gabriel Fonseca
        </Name>
      </UserContainer>

      <Link to='/userData'>
        <UserDataContainer>
          <UserDataIcon>
            <AiFillFileText className='text-xl text-gray-500'/>
          </UserDataIcon>
          <UserDataDescription>
            Meus Dados
          </UserDataDescription>
        </UserDataContainer>
      </Link>
      
      <Link to='/userDataLocation'>
        <UserDataContainer>
          <UserDataIcon>
            <AiTwotoneEnvironment className='text-xl text-gray-500'/>
          </UserDataIcon>
          <UserDataDescription>
            Endereços
          </UserDataDescription>
        </UserDataContainer>
      </Link>

      <Link to='/cause'>
        <UserDataContainer>
          <UserDataIcon>
            <AiFillSmile className='text-xl text-gray-500'/>
          </UserDataIcon>
          <UserDataDescription>
            Causa do Projeto
          </UserDataDescription>
        </UserDataContainer>
      </Link>
    </Layout>
  );
}

export default User;
