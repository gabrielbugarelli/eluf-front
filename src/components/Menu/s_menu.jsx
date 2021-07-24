import tw from 'tailwind-styled-components'

export const Container = tw.div`
fixed
flex
bg-green-500
bottom-0
w-full
h-20
items-center
gap-4
pr-2
pl-2
justify-around

//md
md:flex
md:left-0
md:w-16
md:h-full
md:min-h-screen
md:flex-col
md:justify-center
md:gap-16

`;
export const ContainerIcon = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-16
  w-16
  rounded-lg
  hover:bg-green-600
  

  // md
  md:h-14
  md:w-14
  


  
`;

