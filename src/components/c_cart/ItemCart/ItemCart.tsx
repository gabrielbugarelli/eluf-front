// react and css
import React from 'react';
import { DataStore } from '../../../store/CartStore/Cart.store';

// styled-components
import {
  Container,
  ImageCart,
  ContextCart,
  NameCart,
  DescriptionCart,
  PriceCart,
  ContainerPriceAndCouter,
  Couter
} from './s_itemcart'

// icon
import {AiOutlinePlus, AiOutlineMinus}from "react-icons/ai";

interface DataItemCart {
  dataItemCart:DataStore
}

const ItemCart = ({dataItemCart}:DataItemCart) => {
  return (
    <Container>
      <ImageCart src={dataItemCart.image}/>
      <ContextCart>
        <NameCart>{dataItemCart.name}</NameCart>
        <DescriptionCart>{dataItemCart.description}</DescriptionCart>
        <ContainerPriceAndCouter>
          <PriceCart>R$ {dataItemCart.price}</PriceCart>
          <Couter>
            <AiOutlineMinus style={{color:'black'}}
              onClick={()=>dataItemCart.setCouter(dataItemCart.couter+1)}
            />
              <p className='text-green-500'>{dataItemCart.couter}</p>
            <AiOutlinePlus style={{color:'black'}}
              onClick={()=>dataItemCart.setCouter()}
            />

          </Couter>
        </ContainerPriceAndCouter>
      </ContextCart>
    </Container>
  );
}

export default ItemCart;
