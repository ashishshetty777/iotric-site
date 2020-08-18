import React from 'react';
import NavBar from './NavBar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
