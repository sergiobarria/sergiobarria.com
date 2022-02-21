import React from 'react';

export default function Favicon() {
  return (
    <>
      <link href='/static/favicon/favicon.ico' rel='shortcut icon' />
      <link href='/static/favicon/site.webmanifest' rel='manifest' />
      <link
        href='/static/favicon/apple-touch-icon.png'
        rel='apple-touch-icon'
        sizes='180x180'
      />
      <link
        href='/static/favicon/favicon-32x32.png'
        rel='icon'
        sizes='32x32'
        type='image/png'
      />
      <link
        href='/static/favicon/favicon-16x16.png'
        rel='icon'
        sizes='16x16'
        type='image/png'
      />
      <link
        color='#4a9885'
        href='/static/favicon/safari-pinned-tab.svg'
        rel='mask-icon'
      />
      <meta
        name='apple-mobile-web-app-title'
        content='Sergio Barria Portfolio Website'
      />
      <meta name='application-name' content='Sergio Barria Portfolio Website' />
      <meta name='msapplication-TileColor' content='#fff' />
      <meta name='theme-color' content='#fff' />
    </>
  );
}
