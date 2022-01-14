import { ComponentPropsWithRef, useRef, useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { HiCheckCircle, HiClipboard } from 'react-icons/hi'

export function Pre(props: ComponentPropsWithRef<'pre'>) {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>
        {`
          pre {
            position: relative;
            padding-top: 2.5rem;
          }
        `}
      </style>
    </pre>
  )
}

export default function CustomCodeBlock(props: ComponentPropsWithRef<'code'>) {
  const textRef = useRef<HTMLDivElement>(null)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const language = props.className?.includes('language')
    ? props.className.replace('language-', '').replace(' code-highlight', '')
    : null

  return (
    <code {...props} data-code-type={language && 'code-block'}>
      {language ? (
        <div ref={textRef} className="overflow-x-auto">
          {props.children}
        </div>
      ) : (
        <span>{props.children}</span>
      )}

      {language && (
        <div className="absolute top-0 left-0 px-3 py-1 border border-t-0 border-l-0 border-gray-600 rounded-br-md">
          <span className="font-medium text-gradient">{language}</span>
        </div>
      )}

      {/* Copy code button */}
      {language && (
        <CopyToClipboard
          text={textRef?.current?.textContent ?? ''}
          onCopy={() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 1500)
          }}
        >
          <button className="absolute top-0 right-0 hidden p-2 text-lg border border-t-0 border-gray-600 rounded-bl-md md:block hover:bg-gray-700">
            {isCopied ? (
              <HiCheckCircle className="text-green-400" />
            ) : (
              <HiClipboard />
            )}
          </button>
        </CopyToClipboard>
      )}
    </code>
  )
}
