// react
import {useState} from 'react'

// components
import { Container, ContainerModal, ImageModal, ContextModal, HeaderModal, TitleModal, DescriptionModal, CouterModal, ButtonModal, ContainerImageModal} from "./s-modalhome";

import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose}from "react-icons/ai";

const ModalHome = ({data, state, setState}) => {
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
            <ButtonModal>Add</ButtonModal>
          
        </ContextModal>
      </ContainerModal>
    </Container>
  );
}

export default ModalHome;
