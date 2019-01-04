import React from 'react';
import Footer from './footer';
import Navbar from '../Navbar/navbar';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './layout.scss';
import 'typeface-roboto';

const Layout = ({ user, children }) => {
  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer year={new Date().getFullYear()} />
    </>
  );
};

export default Layout;
