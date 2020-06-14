import React from 'react';

import Search from 'shared/components/Search';
import ButtonFeatured, { ButtonTheme } from 'shared/components/ButtonFeatured';

import { ReactComponent as SvgLogo } from 'assets/icons/logo.svg';
import { ReactComponent as SvgHome } from 'assets/icons/home.svg';
import { ReactComponent as SvgNotification } from 'assets/icons/notification.svg';
import { ReactComponent as SvgMessage } from 'assets/icons/message.svg';

import styles from './styles.module.scss';

const Header: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <nav>
        <ul>
          <li>
            <SvgHome />
            Home
          </li>
          <li>
            <SvgNotification /> Notifications
          </li>
          <li>
            <SvgMessage />
            Messages
          </li>
        </ul>
      </nav>

      <SvgLogo />

      <div className={styles.toolbox}>
        <Search />
        <img
          src="https://avatars3.githubusercontent.com/u/20674439?v=4"
          alt="Avatar"
        />
        <ButtonFeatured>Tweet</ButtonFeatured>
      </div>
    </div>
  </div>
);

export default Header;
