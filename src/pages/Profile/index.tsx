import React from 'react';

import BannerCover from 'shared/components/BannerCover';
import PreContentBar from 'shared/components/PreContentBar';
import ProfileColumn from 'shared/components/ProfileColumn';

import styles from './styles.module.scss';

const Profile: React.FC = () => {
  return (
    <>
      <BannerCover />
      <PreContentBar />

      <div className={styles.columns}>
        <aside className={styles.left}>
          <ProfileColumn />
        </aside>
        <section>timeline</section>
        <aside className={styles.right}></aside>
      </div>
    </>
  );
};

export default Profile;
