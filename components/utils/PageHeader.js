import React from 'react';

const PageHeader = ({ subtitle, title, text }) => (
  <div className="px-4 lg:mx-0">
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-4 text-base uppercase md:text-lg text-main">
        {subtitle}
      </h3>
      <h1 className="max-w-6xl text-4xl text-center lg:text-7xl">{title}</h1>
      <div className="w-12 h-1 my-8 bg-main" />
    </div>
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
      <p className="mb-8 font-normal prose-sm text-center text-gray-600 md:prose dark:text-gray-100">
        {text}
      </p>
    </div>
  </div>
);

export default PageHeader;
