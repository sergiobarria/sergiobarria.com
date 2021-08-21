import NextLink from 'next/link';

const SectionBtn = ({ children, btnClass, url }) => (
  <div className="w-1/2 mx-auto md:w-5/12 lg:w-3/12">
    <NextLink href={url}>
      <a className={`text-base btn ${btnClass}`}>{children}</a>
    </NextLink>
  </div>
);

export default SectionBtn;
