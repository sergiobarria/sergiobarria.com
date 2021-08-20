const Container = ({ children, mb = '32', mt = '44' }) => (
  <div className={`mb-${mb} mt-${mt}`}>{children}</div>
);

export default Container;
