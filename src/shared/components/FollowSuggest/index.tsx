import React from "react";

import ButtonFeatured, {
  ButtonTheme,
  ButtonSize,
} from "shared/components/ButtonFeatured";

import { ReactComponent as FriendsIcon } from "assets/icons/followers.svg";

import styles from "./styles.module.scss";

import suggestions from "./fakeData";

const FollowSuggest: React.FC = () => (
  <div className={styles.container}>
    <header>
      <strong>Who to Follow</strong>
      <a href="#">Refresh</a>
      <a href="#">View All</a>
    </header>

    <ul>
      {suggestions.map((user) => (
        <li key={user.id}>
          <div className={styles.profile}>
            <img src={user.avatar} alt="User" />
            <div>
              <strong>
                {user.name} <span>{user.user}</span>
              </strong>
              <ButtonFeatured theme={ButtonTheme.Light} size={ButtonSize.Small}>
                Follow
              </ButtonFeatured>
            </div>
          </div>
          <div className={styles.close}>
            <a href="#">x</a>
          </div>
        </li>
      ))}
    </ul>

    <footer>
      <a href="#">
        <FriendsIcon fill="green" className={styles.icon} />
        Find Friends
      </a>
    </footer>
  </div>
);

export default FollowSuggest;
