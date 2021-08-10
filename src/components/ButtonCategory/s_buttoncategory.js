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
  rounded-t-lg
  text-lg
  w-32
  h-8
`;

export const ContextButton = tw.div`
  w-32
  h-auto
  bg-green-100
  absolute
  mt-8
  
  
`;

// export const ContextButton = styled.div`
//     width: 100%;
//     height: auto;
//     max-height: 20vh;
//     position: absolute;
//     border-radius: 15px;
//     background-color: white;
//     overflow-y: auto;
//     ::-webkit-scrollbar{
//         width: 6px;
//         height: 6px;
//     }
//     ::-webkit-scrollbar-thumb{
//         background-color: rgba(0, 0, 0, 0.2);;
//     }

// `; ${(active:boolean)=> active? 'rounded-t-lg' : 'rounded-lg' }
