import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const ViewCounter = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total); // eslint-disable-line

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: 'POST' });

    registerView();
  }, [slug]);

  if (views >= 100) {
    return `${views.toLocaleString()} views`;
  }

  return '';
};

export default ViewCounter;
