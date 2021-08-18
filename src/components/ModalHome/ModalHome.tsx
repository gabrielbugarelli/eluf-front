// react
import React from 'react'
import {useState, useEffect} from 'react'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'

// components
import { Container, ContainerModal, ImageModal, ContextModal, HeaderModal, TitleModal, 
    DescriptionModal,InIcon, CouterModal, ButtonModal, ContainerImageModal, TitleInstructions,
    InputInstrucions} from "./s_modalhome";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose}from "react-icons/ai";
import Router from '../../config/Router';

// interface
import { InData } from '../../pages/home/home';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AddCart } from '../../store/CartStore/Cart.store';

interface DataModal {
  couter:number,
  setCouter:Function,
  dataModal:InData,
  state:Boolean,
  setState:Function
}

export interface addCart {
  dataModal:InData,
  couter:number
}


const ModalHome = ({dataModal, couter, setCouter, state, setState}:DataModal) => {
  const [instrution, setInstrution] = useState('');
  const handleMoreCouter = () =>{
    setCouter(couter+1)
  }
  const handleLessCouter = () => {
    if(couter>0){
      setCouter(couter-1)
    }
  }
  const handleClose = () => {
    setState(!state)
  }

  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  
  const handleAddCart = () =>{
    const dataCart= {
      dataStore:{
        dataModal:dataModal,
        couter:couter
      }
    }
    dispatch(AddCart(dataCart))
  }
  return (
    <Container>
      <ContainerModal>
        <ImageModal src={dataModal.image}/>
        <ContainerImageModal onClick={handleClose}>
          <AiOutlineClose />
        </ContainerImageModal>
        <ContextModal>
          <HeaderModal>
            <TitleModal>{dataModal.name}</TitleModal>
            <DescriptionModal>
              {dataModal.description}
            </DescriptionModal>
            <TitleInstructions> Instruções especiais</TitleInstructions>
            <InputInstrucions placeholder='Digite detalhes do seu pedido' value={instrution} onChange={(e) => setInstrution(e.target.value)}/>
          </HeaderModal>
            <CouterModal>
              <InIcon>
                <AiOutlineMinus style={{color:'black'}}
                onClick={handleLessCouter}
                />
              </InIcon>
                {couter} 
              <InIcon>
                <AiOutlinePlus style={{color:'black'}}
                  onClick={handleMoreCouter} />
              </InIcon>
            </CouterModal>
            <ButtonModal onClick={handleAddCart}>Add</ButtonModal>
        </ContextModal>
      </ContainerModal>
    </Container>
  );
}
export default ModalHome;
