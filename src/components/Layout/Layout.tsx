// react

// components
import { Container, Context } from './s_layout';
import Menu from '../Menu/Menu'
import { ReactElement } from 'react';


interface Children {
  children: ReactElement | ReactElement[]
}


const Layout = ({children}:Children) => {
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