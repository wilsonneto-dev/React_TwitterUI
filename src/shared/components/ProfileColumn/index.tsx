import React from 'react';

import styles from './styles.module.scss';

import { ReactComponent as SvgBorn } from 'assets/icons/born.svg';
import { ReactComponent as SvgUrl } from 'assets/icons/url.svg';
import { ReactComponent as SvgJoined } from 'assets/icons/joined.svg';
import { ReactComponent as SvgPlace } from 'assets/icons/place.svg';
import { ReactComponent as SvgFollowers } from 'assets/icons/followers.svg';
import { ReactComponent as SvgImages } from 'assets/icons/images.svg';

const fakeItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProfileColumn: React.FC = () => (
  <div className={styles.container}>
    <img
      className={styles.avatar}
      src="https://avatars3.githubusercontent.com/u/20674439?v=4"
      alt="Avatar"
    />
    <h1>Wilson Neto</h1>
    <span>@CodeLovers</span>
    <p>Always Coding, Learning and Growing...</p>
    <ul>
      <li>
        <SvgPlace /> São Paulo, Brazil{' '}
      </li>
      <li>
        <SvgUrl /> wilsonneto.com.br{' '}
      </li>
      <li>
        <SvgJoined /> 09/06/2020{' '}
      </li>
      <li>
        <SvgBorn /> 16/09/1985{' '}
      </li>
    </ul>

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

    <div className={styles.photos}>
      <strong>
        <SvgImages />
        266 photos and videos
      </strong>
      <ul>
        {fakeItems.map((i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProfileColumn;
