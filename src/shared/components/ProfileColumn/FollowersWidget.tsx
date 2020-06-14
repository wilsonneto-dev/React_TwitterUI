import React from 'react';

import styles from './styles.module.scss';

import { ReactComponent as SvgFollowers } from 'assets/icons/followers.svg';

const fakeItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FollowersWidget: React.FC = () => (
  <div className={styles.followers}>
    <strong>
      <SvgFollowers />
      73 followers that you know
    </strong>
    <ul>
      {fakeItems.map((i) => (
        <li key={i}></li>
      ))}
    </ul>
  </div>
);

export default FollowersWidget;
