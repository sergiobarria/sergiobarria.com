import NextImage from 'next/image';

import servicesData from '@/data/servicesData';

const ServicesContent = () => (
  <div className="grid grid-cols-12 grid-rows-2 gap-4 my-6 min-h-services">
    {servicesData.map(service => (
      <div
        key={service.id}
        className={`relative col-span-12 ${
          service.id === 2
            ? 'bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900'
            : 'bg-gray-800'
        } rounded overflow-hidden lg:col-span-6 ${
          service.id === 1 ? 'lg:row-span-2' : 'lg:row-span-1'
        }`}
      >
        {service.image && (
          <>
            <div className="absolute inset-0">
              <NextImage
                src={service.image}
                alt="service full stack development"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-80" />
          </>
        )}
        <article className="relative pt-8 pl-8 text-white min-h-service">
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
        </article>
      </div>
    ))}
  </div>
);

export default ServicesContent;
