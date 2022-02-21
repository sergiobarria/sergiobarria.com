import React from 'react';

import clsx from 'clsx';

interface Props<T> {
  items: T[];
  children: (item: T) => React.ReactNode;
  as?: 'grid' | 'list';
}

interface ObjId {
  id?: string | number;
  _id?: string | number;
}

export default function List<T extends ObjId>({
  items,
  as = 'list',
  children,
}: Props<T>) {
  return (
    <div
      className={clsx(
        as === 'grid' && 'grid grid-cols-1 gap-6 sm:grid-cols-2',
        as === 'list' && ''
      )}
    >
      {items.map((item) => (
        <div key={item.id || item._id}>{children(item)}</div>
      ))}
    </div>
  );
}
