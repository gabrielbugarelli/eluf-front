// react and css
import React, {useState} from 'react';

// components
import {Container, ImageItem, TitleItem, DescriptionItem, ContainerItem, PriceItem, HeaderItem, ContainerModal} from './s_item'
import ModalHome from '../ModalHome/ModalHome'

//interface 
import { InData } from '../../../pages/home/home';

interface DataItem{
  dataItem:InData
}

const Item = ({dataItem}:DataItem) => {
  const [active, setActive] = useState(false); 
  const [couter, setCouter] = useState(0);

  const handleOpen = () => {
    setActive(!active)
  }
  const handleClose = () => {
    setActive(!active)
  }

  return (
    <>
      <Container onClick={handleOpen}>
        <ImageItem src={dataItem.image}/>
        <ContainerItem>
          <HeaderItem>
            <TitleItem>{dataItem.name}</TitleItem>
            <PriceItem>R$ {dataItem.price}</PriceItem>
          </HeaderItem>
          <DescriptionItem>{dataItem.description}</DescriptionItem>
        </ContainerItem>
      </Container>
      {active &&
        <>
          <ContainerModal onClick={handleClose}/>
          <ModalHome couter={couter} setCouter={setCouter}
            dataModal={dataItem} state={active} setState={setActive}
          />
        </>
      } 
    </>
  );
}

export default Item;
