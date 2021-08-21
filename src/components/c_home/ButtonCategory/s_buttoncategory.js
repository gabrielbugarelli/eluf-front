import tw from 'tailwind-styled-components'
import styled from 'styled-components';

export const Container = tw.div`
  flex
  flex-col
  relative
`;

export const ContainerButton = tw.button`
  bg-green-500
  text-white
  font-bold
  rounded-sm
  text-lg
  w-32
  h-8
`;

export const ContextButton = tw.div`
  w-32
  h-auto
  bg-green-400
  absolute
  mt-8
  rounded-sm
  cursor-pointer
  // adicionar um transition 
  // adicionar um hover
  
`;
export const ItemButton = tw.div`
  w-full
  h-auto
  border-b-2
  border-green-500
  text-white
  
`;
