import tw from 'tailwind-styled-components'
import styled from 'styled-components';

export const Container = tw.div`
  fixed
  flex
  items-center
  justify-center
  pt-20
  w-screen
  h-screen
  float-right
  top-0
  left-0
  focus:

`;
export const ContainerModal = tw.div`
  w-4/5
  h-3/4  
  bg-green-50
  rounded-xl
  shadow-xl
  flex
  flex-col
  overflow-auto
  
`;

export const ImageModal = tw.img`
  w-full
  h-auto
  rounded-3xl


  // copiado
  // md
  md:w-2/4
  md:h-4/5
  md:ml-2
  // lg
  lg:w-2/3
`;

export const ContextModal = tw.div`
  flex-1
  pr-3
  pl-3
  pb-3
  flex
  items-center
  flex-col
  
  

  // copiado
  // md
  md:h-4/5
  md:w-full
  md:max-w-full
  md:flex
  md:flex-col
`;

export const HeaderModal = tw.div`
  w-full
  h-auto
  mb-3


`;

export const TitleModal = tw.div`
  overflow-hidden
  whitespace-nowrap
  overflow-ellipsis
  pr-5
  text-green-500
  text-2xl

`;

export const CouterModal = tw.div`
  w-full
  flex
  items-center
  mt-4
  justify-around
  text-3xl
  text-green-400

`;

export const ButtonModal = tw.button`
  mt-3
  bg-green-500
  w-2/4
  h-1/6
  rounded-lg
  text-white
`;

export const DescriptionModal = styled.div`
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  color: #4B5563 ;
  @media(min-width:768px){
    width: 85%;
    max-width: 85%;
    -webkit-line-clamp: 2; 
    
    
  }
`;

