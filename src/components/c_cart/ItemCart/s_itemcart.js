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
  h-20
  rounded-l-xl

`;

export const ContextCart = tw.div`
  flex
  flex-1
  flex-col
  bg-gray-200
  pl-2
  pt-2
`;

export const NameCart = tw.div`
  text-lg
  text-green-500
`;

export const DescriptionCart = tw.div`
  text-md
  text-gray-600
`;

export const PriceCart = tw.div`
  text-red-600
`;