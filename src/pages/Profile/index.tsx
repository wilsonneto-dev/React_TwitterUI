import React from 'react';

import BannerCover from 'shared/components/BannerCover';
import PreContentBar from 'shared/components/PreContentBar';
import ProfileColumn from 'shared/components/ProfileColumn';
import FollowSuggest from 'shared/components/FollowSuggest';

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

        <section className={styles.main}>timeline</section>

        <aside className={styles.right}>
          <FollowSuggest />
        </aside>
      </div>
    </>
  );
};

export default Profile;
