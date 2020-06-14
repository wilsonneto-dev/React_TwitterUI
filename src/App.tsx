import React from 'react';

import Layout from 'shared/layout/Layout';
import Profile from 'pages/Profile';

import 'theme/global.scss';

const App: React.FC = () => (
  <Layout>
    <Profile />
  </Layout>
);

export default App;
