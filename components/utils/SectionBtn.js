import NextLink from 'next/link';

const SectionBtn = ({ children, btnClass, url }) => (
  <div className="flex justify-center">
    <NextLink href={url}>
      <a className={`text-base btn ${btnClass}`}>{children}</a>
    </NextLink>
  </div>
);

export default SectionBtn;
