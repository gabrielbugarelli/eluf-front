// react
import { Link } from 'react-router-dom';

// components
import { Container, Context } from './s_layout';
import Menu from '../Menu/Menu'

const Layout = ({children}) => {
  return (
    <Container>
      <Context>
        {children}
      </Context>
      <Menu />
    </Container>
  );
}

export default Layout;  