import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  min-h-full
  flex-col
  bg-red-500
  
`;

export const ImageItem = tw.img`
  w-full
  h-3/5
  rounded-3xl
`;

export const TitleItem = tw.p`
  text-green-500
  text-center
  text-2xl
`;