import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Layout;
