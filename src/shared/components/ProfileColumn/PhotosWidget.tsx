import React from 'react';

import styles from './styles.module.scss';

import { ReactComponent as SvgImages } from 'assets/icons/images.svg';

const fakeItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PhotosColumn: React.FC = () => (
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
);

export default PhotosColumn;
