import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const Container = tw.div`
  flex
  h-auto
  flex-col
  rounded-2xl
  shadow-sm
  w-full
  bg-green-50
  
  // md
  md:flex-row
  md:h-36
  md:items-center
  md:justify-center
  md:pt-2
  md:pb-2
  md:pl-2
  md:pr-2
  md:max-w-full


  // lg
  lg:pt-2
  lg:pb-2
  lg:pl-2
  lg:pr-2



  
`;
  
  export const ContainerItem = tw.div`
  h-full
  w-full
  pr-3
  pl-3
  pb-3
  pt-0
  mt-0
  
  // md
  md:h-full
  md:w-2/4
  md:max-w-full
  md:flex
  md:flex-col
  
  lg:w-2/4
  lg:flex
  lg:flex-col
  
  
`;

export const ImageItem = tw.img`
  w-full
  h-auto
  max-h-72
  rounded-t-2xl
  
  // md
  md:w-2/4
  md:h-full
  md:rounded-2xl

  // lg
  lg:w-2/4
`;


export const HeaderItem = tw.div`
  flex
  justify-between
  items-center
  mt-2
  flex-row
  
  // md
  md:flex
  md:flex-col
  md:items-start
  md:w-44
  md:pr-2
  md:mt-0
  
  // lg
  lg:w-40
  lg:pr-2
  lg:mt-0
  lg:pt-0
`;


export const TitleItem = tw.p`
  overflow-hidden
  whitespace-nowrap
  overflow-ellipsis
  pr-5
  text-green-500
  text-2xl
  md:text-xl
`;
export const PriceItem = tw.p`
  text-lg
  text-red-600
  whitespace-nowrap
`;

export const ContainerModal = tw.div`
fixed
flex
items-center
justify-center
w-screen
h-screen
float-right
top-0
left-0
bg-black
opacity-50
`;



export const DescriptionItem = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  color: #4B5563 ;
  text-align: start;
  @media(min-width:768px){
    -webkit-line-clamp: 2; 
  }
`;
