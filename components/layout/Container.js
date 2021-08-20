const Container = ({ children, mb = '32', mt = '44' }) => (
  <div className={`mb-${mb} mt-${mt} max-w-2xl mx-auto py-20`}>{children}</div>
);

export default Container;
