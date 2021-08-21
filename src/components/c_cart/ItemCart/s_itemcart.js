import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const Container = tw.div`
  flex
  flex-row
  w-full
  h-auto
  justify-between
  mb-3
  rounded-xl

  
`;
export const ImageCart = tw.img`
  w-1/4
  rounded-l-xl

`;

export const ContextCart = tw.div`
  flex
  flex-1
  flex-col
  w-16
  bg-gray-100
  pl-2
  pt-2
  pb-2
  pr-2
`;

export const NameCart = tw.div`
  overflow-hidden
  whitespace-nowrap
  overflow-ellipsis
  text-lg
  text-green-500
`;

export const DescriptionCart = tw.div`
  overflow-hidden
  whitespace-nowrap
  overflow-ellipsis
  
  text-md
  text-gray-600
`;

export const ContainerPriceAndCouter = tw.div`
  w-full
  flex
  justify-between
`;

export const PriceCart = tw.div`
  text-red-600
  flex
  mt-2
  text-sm
`;

export const Couter = tw.div`
  flex
  justify-between
  items-center
  w-14
`;