import NextImage from 'next/image';

const SectionTitleBg = ({ src, alt, width, height }) => (
  <div className="absolute -top-4 -left-2/3 lg:-top-10 lg:-left-1/3 -z-10">
    <NextImage src={src} alt={alt} width={width} height={height} />
  </div>
);

export default SectionTitleBg;
