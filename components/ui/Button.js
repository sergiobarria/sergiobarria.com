import { AiOutlineArrowDown } from 'react-icons/ai';

const Button = ({ children }) => (
  <button
    type="button"
    className="flex items-center justify-center px-8 py-4 font-bold uppercase transition-all duration-300 ease-in-out bg-main hover:bg-red-700"
  >
    {children} <AiOutlineArrowDown className="ml-2 text-xl" />
  </button>
);

export default Button;
