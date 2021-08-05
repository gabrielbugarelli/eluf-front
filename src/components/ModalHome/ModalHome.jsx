// react
import React from 'react'
import {useState, useEffect} from 'react'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
// components
import { Container, ContainerModal, ImageModal, ContextModal, HeaderModal, TitleModal, DescriptionModal, CouterModal, ButtonModal, ContainerImageModal} from "./s-modalhome";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose}from "react-icons/ai";
import Router from '../../config/Router';

function ModalHome({counter, setCounter, data, state, setState}){
  
  const hadleMoreCouter = () =>(
    setCounter(counter+1)
   )
  const handleLessCouter = () => {
    if (counter>0) {
      setCounter(counter-1)
    }
  }

  const handleClose = () =>(
    setState(!state)
    
  )
  const teste = 'vamos ver'
 
  return (
      
      <Container>
        <ContainerModal>
          <ImageModal src={data.image}/>
          <ContainerImageModal onClick={handleClose}>
            <AiOutlineClose />
          </ContainerImageModal>

          <ContextModal>
            <HeaderModal>
              <TitleModal>{data.name}</TitleModal>
              <DescriptionModal>
                {data.description}
              </DescriptionModal>
            </HeaderModal>
            
              <CouterModal>
                <AiOutlineMinus style={{color:'black'}}
                  onClick={handleLessCouter}
                  />
                  {counter}
                <AiOutlinePlus style={{color:'black'}}
                  onClick={hadleMoreCouter} />
              </CouterModal>
              <ButtonModal>Add</ButtonModal>
            
          </ContextModal>
        </ContainerModal>
       
        
      </Container>
    
  );
}

export default ModalHome

