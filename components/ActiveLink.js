import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import React, { Children } from 'react';

// const ActiveLink = ({ children, activeClassName, ...props }) => {
//   const { asPath } = useRouter();
//   const child = Children.only(children);
//   const childClassName = child.props.className || '';

//   const className =
//     asPath === props.href || asPath === props.as
//       ? `${childClassName} ${activeClassName}`.trim()
//       : childClassName;

//   return (
//     <Link {...props}>
//       {React.cloneElement(child, { classNAme: className || null })}
//     </Link>
//   );
// };

// export default ActiveLink;
