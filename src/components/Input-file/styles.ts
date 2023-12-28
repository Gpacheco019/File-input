import tw from "tailwind-styled-components";

export const TextInput = tw.h2`
  font-bold
  text-green-700
  hover:text-green-400  
`;

export const Wrapper = tw.div`  
  flex
  justify-center
  items-center
  bg-green-100
  hover:bg-green-200

  border-2
  border-green-600
  w-[400px]
  h-[200px]
  rounded-2xl
  border-dashed
  hover:border-green-80
  cursor-pointer 
`;

export const InputHidden = tw.div`
  flex-none
`;
