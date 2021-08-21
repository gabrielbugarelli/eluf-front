import tw from 'tailwind-styled-components'

export const Container = tw.div`
fixed
flex
bg-transparent
bottom-0
w-full
bg-green-500
items-center
pr-2
pl-2
justify-around

md:flex
md:left-0
md:w-16
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
  
  md:h-14
  md:w-14
`;

export const NameIcon = tw.p`
  text-white
`;