import { AiOutlineArrowRight } from 'react-icons/ai';

const Button = ({ children }) => (
  <button
    type="button"
    className="flex items-center justify-center px-8 py-4 font-bold underline uppercase transition-all duration-300 ease-in-out hover:text-red-700"
  >
    {children} <AiOutlineArrowRight className="ml-2 text-xl" />
  </button>
);

export default Button;
