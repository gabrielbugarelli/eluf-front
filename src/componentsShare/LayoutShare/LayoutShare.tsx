// react

// components
import { Container, Content } from './s_layoutshare';
import Menu from './MenuShare/MenuShare'
import { ReactElement } from 'react';


export interface Children {
  children: ReactElement | ReactElement[]
}


const Layout = ({children}:Children) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      <Menu />
    </Container>
  );
}

export default Layout;  