import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = Children.only(children);
  let className = child.props.className || '';
  const isDynamicRoute = props.href.match(/^\/?\[{1,2}\.{0,3}[a-z]+\]{1,2}$/);

  // console.log(router);

  if (
    router.pathname === props.href &&
    !isDynamicRoute &&
    props.activeClassName
  ) {
    className = `${className} ${props.activeClassName}`.trim();
  } else if (router.asPath === props.as && isDynamicRoute) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
