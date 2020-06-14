import React from 'react';

import Header from 'shared/layout/Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
