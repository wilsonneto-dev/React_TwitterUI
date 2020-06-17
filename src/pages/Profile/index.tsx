import React from 'react';

import BannerCover from 'shared/components/BannerCover';
import PreContentBar from 'shared/components/PreContentBar';
import ProfileColumn from 'shared/components/ProfileColumn';
import FollowSuggest from 'shared/components/FollowSuggest';
import TrendsSuggest from 'shared/components/TrendsSuggest';
import Timeline from 'shared/components/Timeline';

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

        <section className={styles.main}>
          <Timeline />
        </section>

        <aside className={styles.right}>
          <FollowSuggest />
          <TrendsSuggest />
        </aside>
      </div>
    </>
  );
};

export default Profile;
