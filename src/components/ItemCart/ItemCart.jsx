// react

// components
import { Container, ImageCart, ContextCart, NameCart, DescriptionCart, PriceCart } from "./s-itemcart";


const ItemCart = ({data}) => {
  return (
    <Container>
      <ImageCart src={data.image} />
      <ContextCart>
        <NameCart>{data.name}</NameCart>
        <DescriptionCart>{data.description}</DescriptionCart>
        <PriceCart>R${data.price}</PriceCart>
      </ContextCart>
    </Container>
  );
}

export default ItemCart;
