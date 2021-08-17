// react and css
import {useState} from 'react'

// components
import {Container, ContainerButton, ContextButton, ItemButton} from './s_buttoncategory'
import { ArrayCategory } from '../../pages/home/home';

const ButtonCategory = ({data}:ArrayCategory) => {
  const [active, setActive] = useState<Boolean>(false);
  return (
    <Container>
      {/* active={active} */}
      <ContainerButton onClick={() => setActive(!active)}>
        Category
      </ContainerButton>
      {active&&
        <ContextButton>
          {data.map((item,key)=>(
            <ItemButton>{item.name}</ItemButton>
          ))}
          <ItemButton>Todos os tipos</ItemButton>
        </ContextButton>
      }
    </Container>
  );
}

export default ButtonCategory;
