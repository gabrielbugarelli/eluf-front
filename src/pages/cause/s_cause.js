import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  flex-col
  items-center
  text-gray-500
`;
export const Title = tw.div`
  font-bold
  text-xl
`;
export const Context = tw.div`
  p-5
  flex
  flex-col
  gap-2
  text-justify
  text-sm

  //md
  md:max-w-lg
  md:text-md
`;
export const Interaction = tw.div`
  font-bold
  text-xl
`;
export const Icons = tw.div`
  flex
  items-center
  justify-center
  gap-5
  mt-3
  text-3xl
`;
