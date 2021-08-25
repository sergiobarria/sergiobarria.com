const Container = ({ children, mb = '32', mt = '44' }) => (
  <div className={`mb-${mb} mt-${mt} max-w-screen-xl mx-auto py-12`}>
    {children}
  </div>
);

export default Container;
