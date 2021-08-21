// components
import Layout from '../../componentsShare/LayoutShare/LayoutShare';
import { Link } from 'react-router-dom';

// components-share

//styles
import {
  UserContainer,
  Name,
  Icon,
  UserDataContainer,
  UserDataIcon,
  UserDataDescription
} from "./s_user";

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
              My data
            </UserDataDescription>
          </UserDataContainer>
        </Link>
        
        <Link to='/userDataLocation'>
          <UserDataContainer>
            <UserDataIcon>
              <AiTwotoneEnvironment className='text-xl text-gray-500'/>
            </UserDataIcon>
            <UserDataDescription>
              My Adresses
            </UserDataDescription>
          </UserDataContainer>
        </Link>

        <Link to='/cause'>
          <UserDataContainer>
            <UserDataIcon>
              <AiFillSmile className='text-xl text-gray-500'/>
            </UserDataIcon>
            <UserDataDescription>
              Project Cause
            </UserDataDescription>
          </UserDataContainer>
        </Link>
    </Layout>
  );
}

export default User;