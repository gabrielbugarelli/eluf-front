// react and css
import {useState} from 'react'

// components
import {Container, ContainerButton, ContextButton} from './s_buttoncategory'
import { ArrayCategory } from '../../pages/home/home';

const ButtonCategory = ({data}:ArrayCategory) => {
  const [active, setActive] = useState<Boolean>(false);
  return (
    <Container>
      {/* active={active} */}
      <ContainerButton onClick={() => setActive(!active)}>
        Category
      </ContainerButton>
      {/* {active&& */}
        <ContextButton>
          Testando
        </ContextButton>
      {/* } */}
    </Container>
  );
}

export default ButtonCategory;
