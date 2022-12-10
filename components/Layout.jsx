import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="container px-5 md:px-10">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
