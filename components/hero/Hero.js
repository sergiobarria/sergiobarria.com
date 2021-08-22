import { useEffect, useRef } from 'react';
import NextLink from 'next/link';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { VscFoldDown } from 'react-icons/vsc';
import { Link } from 'react-scroll';

import SocialIcons from '../layout/SocialIcons';

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
    <section className="relative flex items-center justify-center max-w-screen-xl px-6 pb-12 mx-auto overflow-hidden lg:pb-0 lg:px-0 min-h-8/10 ">
      <AnimatePresence>
        <motion.article
          className="flex flex-col items-center justify-center min-h-full text-gray-900"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          exit={{}}
        >
          <h3 className="mb-4 text-base uppercase md:text-lg">
            Hi there, my name is <span className="font-bold">Sergio</span>
          </h3>
          <h1 className="heading-1">
            I'm <span ref={el} className="text-main" />
          </h1>
          <div className="w-12 h-1 my-8 bg-main" />
          <p className="max-w-lg mb-16 text-base tracking-wider text-center opacity-70 md:text-lg lg:text-xl">
            I create beautiful, modern and high-performing{' '}
            <span className="font-medium text-main">
              web solutions for your business
            </span>
          </p>
          <div className="flex-col items-center justify-center space-y-4 lg:space-y-0 md:flex lg:space-x-16 lg:flex-row">
            <Link to="featured-projects" smooth duration={200}>
              <button type="button" className="uppercase border btn btn-black">
                See My Work <FiArrowDown className="ml-2 text-xl" />
              </button>
            </Link>
            <NextLink href="/about">
              <a className="btn btn-secondary">
                about me <FiArrowUpRight className="ml-2 text-xl" />
              </a>
            </NextLink>
          </div>
          <div className="flex items-center justify-center max-w-xl mx-auto">
            <SocialIcons />
          </div>
          <Link to="services" smooth duration={200}>
            <VscFoldDown className="mt-16 text-4xl font-bold cursor-pointer text-main animate-bounce " />
          </Link>
        </motion.article>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
