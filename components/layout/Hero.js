import NextImage from 'next/image';

import Button from '../ui/Button';
import ButtonSecondary from '../ui/ButtonSecondary';

const Hero = () => (
  <section className="relative h-screen overflow-hidden bg-gray-900 pt-28">
    <div className="absolute right-0 bottom-4">
      <NextImage
        src="/static/layout-assets/polygon-1.png"
        width={604}
        height={512}
      />
    </div>
    <div className="absolute -bottom-24 -left-64">
      <NextImage
        src="/static/layout-assets/polygon-2.png"
        width={539}
        height={410}
      />
    </div>
    <article className="flex flex-col items-center justify-center text-white h-5/6">
      <h3 className="mb-4 uppercase">
        Hi there, my name is <span className="font-bold">Sergio</span>
      </h3>
      <h1 className="text-white text-7xl">
        I'm a <span className="text-main">Full Stack</span> Web Developer
      </h1>
      <div className="w-12 h-1 my-4 bg-main" />
      <p className="max-w-lg mb-8 text-xl tracking-wider text-center text-gray-300">
        Engineer, Developer and Writer. I create beautiful, modern and
        high-performing{' '}
        <span className="font-medium text-main">
          web solutions for your business
        </span>
      </p>
      <div className="flex items-center justify-center space-x-16">
        <Button>see my work</Button>
        <ButtonSecondary>about me</ButtonSecondary>
      </div>
    </article>
  </section>
);

export default Hero;
