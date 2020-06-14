import React from 'react';

import ResumeWidget from './ResumeWidget';
import FollowersWidget from './FollowersWidget';
import PhotosWidget from './PhotosWidget';

import styles from './styles.module.scss';

const ProfileColumn: React.FC = () => (
  <div className={styles.container}>
    <ResumeWidget />
    <FollowersWidget />
    <PhotosWidget />
  </div>
);

export default ProfileColumn;
