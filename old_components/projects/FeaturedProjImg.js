import NextImage from 'next/image';

const FeaturedProjImg = ({ proj, index }) => (
  <div
    className={`relative w-full h-60 md:h-80 lg:h-96 rounded-lg overflow-hidden row-start-1 row-end-2 lg:row-start-1 lg:row-end-2 -z-10 shadow-lg ${
      index === 1
        ? 'col-span-12 lg:col-start-1 lg:col-end-7'
        : 'col-span-12 lg:col-start-6 lg:col-end-13'
    }`}
  >
    <div className="absolute inset-0 z-10 bg-black opacity-70" />
    <NextImage
      src={proj.coverImage.url}
      alt={proj.projectName}
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default FeaturedProjImg;
