import Highlight, { defaultProps } from 'prism-react-renderer';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple'; // eslint-disable-line

export const CodeBlock = props => {
  const language = 'jsx';

  return (
    <Highlight
      {...defaultProps}
      code={props.children.trim()}
      language={language}
      theme={shadesOfPurple}
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
};
