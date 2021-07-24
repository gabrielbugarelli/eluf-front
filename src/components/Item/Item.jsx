// react


// components
import {Container, ImageItem, TitleItem, DescriptionItem, ContainerItem, PriceItem, HeaderItem} from './s_item'


const Item = ({data}) => {
  return (
    <Container>
      <ImageItem src={data.image}/>
      <ContainerItem>
        <HeaderItem>
          <TitleItem>{data.name}</TitleItem>
          <PriceItem>R$ {data.price}</PriceItem>
        </HeaderItem>
        <DescriptionItem>{data.description}</DescriptionItem>
      </ContainerItem>
    </Container>
  );
}

export default Item;
