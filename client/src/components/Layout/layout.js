import React from 'react';
import Footer from './footer';
import Header from './header';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'typeface-roboto';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer year={new Date().getFullYear()} />
    </>
  );
};

export default Layout;
