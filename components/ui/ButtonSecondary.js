import { AiOutlineArrowRight } from 'react-icons/ai';

const Button = ({ children }) => (
  <button
    type="button"
    className="flex items-center justify-center px-8 py-4 mt-12 font-bold text-gray-400 underline uppercase transition-all duration-300 ease-in-out lg:mt-0 hover:text-main"
  >
    {children} <AiOutlineArrowRight className="ml-2 text-xl" />
  </button>
);

export default Button;
