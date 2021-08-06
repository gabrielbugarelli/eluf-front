import tw from "tailwind-styled-components";

export const Container = tw.div`
  md:flex
  md:flex-col
  md:items-center
  md:justify-center
  md:p-5
  md:gap-5
`

export const Forms = tw.form`
  flex
  flex-col
  items-center
  max-w-3xl

  //md
  md:w-full
  md:rounded
  md:border-2
`;

export const Input = tw.input`
  border-2
  w-10/12
  p-1.5
  mb-2
  rounded-md
`
export const Button = tw.button`
  rounded-lg
  text-white
  font-bold
  bg-green-500
  w-40
  p-2
  mb-2
`