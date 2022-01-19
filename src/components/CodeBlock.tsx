import { ComponentPropsWithRef, useRef, useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiCheckCircle } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';
import { SiJavascript, SiTypescript } from 'react-icons/si';

export function Pre(props: ComponentPropsWithRef<'pre'>) {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>
        {`
          pre {
            position: relative;
          }
        `}
      </style>
    </pre>
  );
}

export default function CustomCodeBlock(props: ComponentPropsWithRef<'code'>) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const language = props.className?.includes('language')
    ? props.className.replace('language-', '').replace(' code-highlight', '')
    : null;

  return (
    <code {...props} data-code-type={language && 'code-block'}>
      {language ? (
        <div ref={textRef} className='overflow-x-auto'>
          {props.children}
        </div>
      ) : (
        <span>{props.children}</span>
      )}

      {language && (
        <div className='absolute right-0 z-50 px-3 py-1 bottom-2'>
          {language === 'js' ? (
            <SiJavascript className='text-yellow-500' size={25} />
          ) : language === 'typescript' ? (
            <SiTypescript className='text-blue-500' size={25} />
          ) : null}
        </div>
      )}

      {/* Copy code button */}
      {language && (
        <CopyToClipboard
          text={textRef?.current?.textContent ?? ''}
          onCopy={() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
          }}
        >
          <button className='absolute top-0 right-0 hidden p-2 text-lg border border-t-0 border-gray-600 rounded-bl-md md:block hover:bg-gray-700'>
            {isCopied ? (
              <HiCheckCircle className='text-green-400' />
            ) : (
              <MdContentCopy />
            )}
          </button>
        </CopyToClipboard>
      )}
    </code>
  );
}
