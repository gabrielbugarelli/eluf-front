import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const HeaderCart = tw.div`
  w-full
  h-20
  pt-3
  pl-3
  text-3xl
  text-green-500

`;

export const ContextCart = tw.div`
  flex
  flex-1
  flex-col
  items-center
  pl-3
  pr-3
  pt-3
  h-3/4
  

`;
export const ContainerCart = tw.div`
  flex
  flex-col
  justify-between
  h-3/5
  bg-green-50
  rounded-md
  overflow-auto
  
  md:w-9/12

  lg:w-7/12
`;
export const Fixed = tw.div`
  
  flex
  flex-1
  flex-col
  items-center  
  w-full
  pr-10

  
  md:flex
  md:flex-col
  md:items-center
  md:bottom-2  
  md:w-full
  md:pr-10
  md:
`;
export const SubPrice = tw.div`
  flex  
  mt-10
  w-full
  justify-end
  text-3xl
  text-gray-500
`;
export const ButtonCart = tw.div`
mt-6
bg-green-500
w-2/4
h-10
flex
items-center
justify-center
rounded-lg
text-white


// md

`;