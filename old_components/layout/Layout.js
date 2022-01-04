import Header from '@/components/header/Header';
import CTA from '@/components/ui/CTA';
import Footer from '@/components/layout/Footer';

const Layout = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>
    <CTA />
    <Footer />
  </>
);

export default Layout;
