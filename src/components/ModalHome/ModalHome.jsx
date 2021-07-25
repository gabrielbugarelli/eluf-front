// react
import React from 'react'
import {useState, useEffect} from 'react'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
// components
import { Container, ContainerModal, ImageModal, ContextModal, HeaderModal, TitleModal, DescriptionModal, CouterModal, ButtonModal, ContainerImageModal} from "./s-modalhome";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose}from "react-icons/ai";
import Router from '../../config/Router';

function ModalHome({data, state, setState}){
  const [couter, setCouter] = useState(0);
  
  const hadleMoreCouter = () =>(
    setCouter(couter+1)
  )
  const handleLessCouter = () => {
    if (couter>0) {
      setCouter(couter-1)
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
                  {couter}
                <AiOutlinePlus style={{color:'black'}}
                  onClick={hadleMoreCouter} />
              </CouterModal>
              <ButtonModal><Link to={{
                pathname:'/cart',
                state:{
                  data:data,
                  counter:couter
                }
              }}>Add</Link></ButtonModal>
            
          </ContextModal>
        </ContainerModal>
        
      </Container>
    
  );
}

export default ModalHome

