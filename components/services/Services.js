import NextImage from 'next/image';

import servicesData from '@/data/servicesData';
import SectionTitle from '../ui/SectionTitle';

const Services = () => (
  <section className="relative py-16 bg-gray-100">
    <div className="absolute -top-4 -left-2/3 lg:-top-10 lg:-left-1/3">
      <NextImage
        src="/static/layout-assets/what-i-do.png"
        alt="what i do water mark"
        width={1500}
        height={300}
      />
    </div>
    <div className="max-w-screen-xl px-4 mx-auto md:px-24 lg:px-4">
      <SectionTitle title="what i do" />

      <div className="grid grid-cols-12 grid-rows-2 gap-4 my-6 min-h-services">
        {servicesData.map(service => (
          <div
            key={service.id}
            className={`relative col-span-12 bg-gray-800 rounded overflow-hidden lg:col-span-6 ${
              service.id === 1 ? 'lg:row-span-2' : 'lg:row-span-1'
            }`}
          >
            {service.image && (
              <>
                <div className="absolute inset-0 -z-10">
                  <NextImage
                    src={service.image}
                    alt="service full stack development"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black -z-10 opacity-80" />
              </>
            )}
            <div className="relative pt-8 pl-8 text-white min-h-service">
              <h3 className="text-2xl font-semibold lg:text-4xl">
                {service.title.map((item, i) => (
                  <p key={i} className="inline-block mr-2">
                    {item}
                  </p>
                ))}
              </h3>
              <div className="w-12 h-1 mt-2 mb-6 bg-white" />
              <p className="w-11/12 text-sm leading-8 text-gray-300 md:text-base lg:w-5/6 lg:text-lg">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
