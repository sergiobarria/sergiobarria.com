import NextImage from 'next/image';

const ColorBar = () => (
  <div className="absolute top-0 right-0 w-3/6 h-32 bg-main">
    <div className="absolute w-20 h-20 left-24 -bottom-10">
      <NextImage
        src="/static/layout-assets/square-dots.png"
        alt="square dots"
        width={80}
        height={80}
      />
    </div>
  </div>
);

export default ColorBar;
