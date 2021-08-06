import tw from 'tailwind-styled-components'

export const Container = tw.div`
  grid
  min-h-screen
  grid-cols-1
  grid-row-14                                     
`;

export const Context = tw.div`
  flex
  flex-col

  // md
  md:ml-16
  md:mb-0
  
`;

export const LastWord = tw.div`
  flex
  min-h-full
  bg-red-700
  mb-5
  
`;
