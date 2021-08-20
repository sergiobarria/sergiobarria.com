import { useEffect, useRef } from 'react';
import NextImage from 'next/image';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';

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
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900 pt-28">
      <div className="absolute hidden -right-20 lg:block -bottom-16">
        <NextImage
          src="/static/layout-assets/polygon-1.png"
          width={604}
          height={512}
        />
      </div>
      <div className="absolute hidden lg:block -bottom-24 -left-64">
        <NextImage
          src="/static/layout-assets/polygon-2.png"
          width={539}
          height={410}
          objectFit="cover"
        />
      </div>
      <AnimatePresence>
        <motion.article
          className="z-10 flex flex-col items-center justify-center min-h-full text-white"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          exit={{}}
        >
          <h3 className="mb-4 text-base uppercase md:text-lg ">
            Hi there, my name is <span className="font-bold">Sergio</span>
          </h3>
          <h1 className="text-4xl text-center text-white md:text-4xl lg:text-7xl">
            I'm <span ref={el} className="text-main" />
          </h1>
          <div className="w-12 h-1 my-8 bg-main" />
          <p className="max-w-lg mb-16 text-base tracking-wider text-center text-gray-300 md:text-lg lg:text-xl">
            I create beautiful, modern and high-performing{' '}
            <span className="font-medium text-main">
              web solutions for your business
            </span>
          </p>
          <div className="flex-col items-center justify-center md:flex lg:space-x-16 lg:flex-row">
            <Button
              uppercase
              btnType="button"
              bg="bg-main"
              hoverBgEffect="hover:bg-main-dark"
            >
              see my work <AiOutlineArrowDown className="ml-2 text-xl" />
            </Button>
            <ButtonSecondary>about me</ButtonSecondary>
          </div>
          <SocialIcons />
        </motion.article>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
