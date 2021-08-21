// react

// components
import { Container, Context } from './s_layoutshare';
import Menu from './MenuShare/MenuShare'
import { ReactElement } from 'react';


export interface Children {
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