// react
import {useState} from 'react'

// components
import {Container, ImageItem, TitleItem, DescriptionItem, ContainerItem, PriceItem, HeaderItem} from './s_item'
import ModalHome from '../../components/ModalHome/ModalHome'

const Item = ({data}) => {
  const [active, setActive] = useState(false); 
  const handleOpen = () => {
    setActive(!active)
    {console.log(active)}
  } 
  return (
    <>
      <Container onClick={handleOpen}>
        <ImageItem src={data.image}/>
        <ContainerItem>
          <HeaderItem>
            <TitleItem>{data.name}</TitleItem>
            <PriceItem>R$ {data.price}</PriceItem>
          </HeaderItem>
          <DescriptionItem>{data.description}</DescriptionItem>
        </ContainerItem>
      </Container>
      {active &&
          <ModalHome data={data}/> 
      }
    </> 
  );
}

export default Item;
