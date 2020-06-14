import React from 'react';

import ButtonFeatured, { ButtonTheme } from 'shared/components/ButtonFeatured';

import styles from './styles.module.scss';
import { ReactComponent as SvgMore } from 'assets/icons/more.svg';

const PreContentBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul>
          <li className={styles.active}>
            <span>Tweets</span>
            <strong>3891</strong>
          </li>
          <li>
            <span>Following</span>
            <strong>3</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>15</strong>
          </li>
          <li>
            <span>Favourites</span>
            <strong>80</strong>
          </li>
        </ul>
        <div className={styles.actions}>
          <ButtonFeatured theme={ButtonTheme.Light}>Follow</ButtonFeatured>
          <SvgMore />
        </div>
      </div>
    </div>
  );
};

export default PreContentBar;
