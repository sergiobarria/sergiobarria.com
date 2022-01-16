import * as React from 'react';

export default function Loader() {
  return (
    <div
      className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen'
      style={{ background: 'rgba(0, 0, 0, 0.3)' }}
    >
      <div className='flex flex-col items-center px-5 py-2 bg-white border rounded-lg'>
        <div className='relative block w-20 h-5 mt-2 loader-dots'>
          <div className='absolute top-0 w-3 h-3 mt-1 rounded-full bg-primary' />
          <div className='absolute top-0 w-3 h-3 mt-1 rounded-full bg-primary' />
          <div className='absolute top-0 w-3 h-3 mt-1 rounded-full bg-primary' />
          <div className='absolute top-0 w-3 h-3 mt-1 rounded-full bg-primary' />
        </div>
        <div className='mt-2 text-xs font-light text-center text-gray-500'>
          Please wait...
        </div>
      </div>
      {/* <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
        <g className='segment'>
          <path
            id='loading-path'
            d='M 94 25 C 94 21.686 96.686 19 100 19 L 100 19 C 103.314 19 106 21.686 106 25 L 106 50 C 106 53.314 103.314 56 100 56 L 100 56 C 96.686 56 94 53.314 94 50 Z'
          ></path>
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(45deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(90deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(135deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(180deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(225deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(270deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
        <g className='segment'>
          <use
            href='#loading-path'
            style={{
              transform: 'rotate(315deg)',
              transformOrigin: '100px 100px',
            }}
          />
        </g>
      </svg> */}
    </div>
  );
}
{
  /*  */
}
