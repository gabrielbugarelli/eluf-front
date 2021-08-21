import tw from 'tailwind-styled-components'

export const ContextHome = tw.div`
  w-full
  pr-8
  pl-8
  pt-2
  transition-all
  duration-1000
`;

export const ImageHome = tw.img`
  rounded-b-xl
  w-full
  h-full
  opacity-60
  mt-0
`;
export const BackgroundImage = tw.div`
  bg-black
  rounded-b-xl
  relative
  
  // md
  md:hidden
`;

export const ContainerTitleImagem = tw.div`
  bg-transparent
  w-full
  h-full
  flex
  absolute
  top-0
  text-3xl
  justify-center
  items-center
  text-white
  
`;

export const HeaderItem = tw.div`
  flex
  fle-col
  items-center
  justify-between
`;

export const TitlePage = tw.p`
  text-green-500
  text-2xl
  
`;

export const ContainerItem = tw.div`
  grid
  grid-cols-1
  gap-3
  mb-24
  mt-3
  
  
  // md
  md:grid-cols-2
  md:mb-5
  md:gap-7

  // lg
  lg:grid-cols-3
  
`;



