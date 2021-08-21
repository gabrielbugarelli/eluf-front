// react and css
import React from 'react';

// styled-components
import {Container} from './s_contentshare'

// interface
import { Children } from '../LayoutShare/LayoutShare';

const ContextShare = ({children}:Children) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default ContextShare;
