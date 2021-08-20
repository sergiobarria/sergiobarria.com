import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { VscFoldDown } from 'react-icons/vsc';

import Button from '../ui/Button';
import ButtonSecondary from '../ui/ButtonSecondary';
import SocialIcons from './SocialIcons';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['a Full Stack Developer', 'an Engineer', 'a Writer'],
      startDelay: 600,
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 5000,
      loop: true,
    });

    // Destroying the typed text
    return () => typed.destroy();
  }, []);

  return (
    <section className="relative flex items-end justify-center px-6 pb-12 overflow-hidden lg:pb-20 lg:px-0 min-h-9/10 ">
      <AnimatePresence>
        <motion.article
          className="flex flex-col items-center justify-center min-h-full text-gray-900"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          exit={{}}
        >
          <h3 className="mb-4 text-base uppercase md:text-lg ">
            Hi there, my name is <span className="font-bold">Sergio</span>
          </h3>
          <h1 className="text-4xl text-center md:text-4xl lg:text-7xl">
            I'm <span ref={el} className="text-main" />
          </h1>
          <div className="w-12 h-1 my-8 bg-main" />
          <p className="max-w-lg mb-16 text-base tracking-wider text-center md:text-lg lg:text-xl">
            I create beautiful, modern and high-performing{' '}
            <span className="font-medium text-main">
              web solutions for your business
            </span>
          </p>
          <div className="flex-col items-center justify-center md:flex lg:space-x-16 lg:flex-row">
            <Button
              uppercase
              btnType="button"
              bg="bg-gray-900"
              hoverTextEffect="hover:text-main"
            >
              See My Work <AiOutlineArrowDown className="ml-2 text-xl" />
            </Button>
            <ButtonSecondary>about me</ButtonSecondary>
          </div>
          <SocialIcons width="6" height="6" />
          <Button href="i">
            <VscFoldDown className="mt-16 text-4xl font-bold text-main animate-bounce " />
          </Button>
        </motion.article>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
