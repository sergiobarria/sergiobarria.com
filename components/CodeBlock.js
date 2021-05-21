/* eslint-disable */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import synthwave84 from 'prism-react-renderer/themes/synthwave84';
import okaidia from 'prism-react-renderer/themes/okaidia';
import vsDark from 'prism-react-renderer/themes/vsDark';

export default function CodeBlock({ children, className }) {
  // const language = className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      theme={okaidia}
      code={children}
      language="javascript"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
