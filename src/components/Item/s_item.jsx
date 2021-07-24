import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const Container = tw.div`
  flex
  h-auto
  flex-col
  bg-green-100
  rounded-lg
`;
  
  export const ContainerItem = tw.div`
  h-full
  w-full
  pr-3
  pl-3
  mb-4
`;

export const ImageItem = tw.img`
  w-full
  h-auto
  rounded-3xl
`;


export const HeaderItem = tw.div`
  flex
  justify-between
  items-center
  mt-2
`;

export const TitleItem = tw.p`
  text-green-500
  text-center
  text-2xl
`;
export const PriceItem = tw.p`
  text-lg
  text-red-600
`;

export const DescriptionItem = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  color: #4B5563 ;
`;
