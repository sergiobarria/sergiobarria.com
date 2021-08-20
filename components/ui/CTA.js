import NextImage from 'next/image';
import { FiSend } from 'react-icons/fi';

import Button from './Button';

const CTA = () => (
  <section className="relative bg-main">
    <div className="flex flex-col items-center justify-between max-w-screen-xl py-16 mx-auto space-y-8 text-center md:text-left md:space-y-0 md:flex-row md:px-4 xl:px-0">
      <div className="text-white">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
          Let's get started!
        </h2>
        <p className="max-w-sm text-base md:text-lg lg:text-xl">
          If you want to know more or hire me, don't hesitate and reach out!
        </p>
      </div>
      <div className="absolute hidden lg:block top-8 right-80">
        <NextImage
          src="/static/layout-assets/arrow.png"
          alt="arrow"
          width={250}
          height={50}
        />
      </div>
      <div className="absolute -bottom-11 right-12 md:right-60">
        <NextImage
          src="/static/layout-assets/square-dots.png"
          alt="arrow"
          width={80}
          height={80}
        />
      </div>
      <Button
        textColor="text-gray-200"
        hoverBgEffect="bg-gray-700"
        hoverTextEffect="text-main"
      >
        Contact Me <FiSend className="ml-2" />
      </Button>
    </div>
  </section>
);

export default CTA;
