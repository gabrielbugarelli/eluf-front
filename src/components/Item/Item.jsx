// react


// components
import {Container, ImageItem, TitleItem} from './s_item'


const Item = ({data}) => {
  return (
    <Container>
      <ImageItem src={data.image}/>
      <TitleItem>{data.name}</TitleItem>
    </Container>
  );
}

export default Item;
