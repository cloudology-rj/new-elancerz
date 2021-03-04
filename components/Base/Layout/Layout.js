import Head from 'next/head';

import Container from '@/components/global/Container';

import { LayoutContainer, LayoutContent } from './LayoutStyles';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children, title = 'Elancerz' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutContainer>
        <LayoutContent>
          <Navbar />
          <main>{children}</main>
        </LayoutContent>

        <Footer />
      </LayoutContainer>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
