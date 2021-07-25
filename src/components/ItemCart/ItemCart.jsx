// react

// components
import { Container, ImageCart } from "./s-itemcart";

const ItemCart = ({data}) => {
  return (
    <Container>
      <ImageCart src={data.image} />
    </Container>
  );
}

export default ItemCart;
