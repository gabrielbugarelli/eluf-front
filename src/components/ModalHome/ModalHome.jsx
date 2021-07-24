// react
import {useState} from 'react'

// components
import { Container, ContainerModal, ImageModal, ContextModal, HeaderModal, TitleModal, DescriptionModal, CouterModal, ButtonModal } from "./s-modalhome";

import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose}from "react-icons/ai";

const ModalHome = ({data}) => {
  const [couter, setCouter] = useState(0);

  const hadleMoreCouter = () =>(
    setCouter(couter+1)
  )
  const handleLessCouter = () => {
    if (couter>0) {
      setCouter(couter-1)
    }
  }
    return (
      <Container>
      <ContainerModal>
        <ImageModal src={data.image}/>
        <AiOutlineClose style={{display:'flex', position:'absolute', top:'0', fontSize:''}}/>

        <ContextModal>
          <HeaderModal>
            <TitleModal>{data.name}</TitleModal>
          </HeaderModal>
          <DescriptionModal>
            {data.description}
          </DescriptionModal>
          <CouterModal>
            <AiOutlinePlus style={{color:'black'}}
              onClick={hadleMoreCouter} />
              {couter}
            <AiOutlineMinus style={{color:'black'}}
              onClick={handleLessCouter}
            />
          </CouterModal>
          <ButtonModal>Add</ButtonModal>
        </ContextModal>
      </ContainerModal>
    </Container>
  );
}

export default ModalHome;
