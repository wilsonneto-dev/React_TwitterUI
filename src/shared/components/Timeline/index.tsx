import React from "react";

import styles from "./styles.module.scss";

import { ReactComponent as SvgLike } from "assets/icons/like.svg";
import { ReactComponent as SvgComments } from "assets/icons/comments.svg";
import { ReactComponent as SvgRetweet } from "assets/icons/retweet.svg";

import fakeTweets from "./fakeData";

const Timeline: React.FC = () => (
  <div className={styles.container}>
    <header>
      <nav>
        <a className={styles.active} href="#">
          Tweets
        </a>
        <a href="#">Tweets and Replies</a>
        <a href="#">Medias</a>
      </nav>
    </header>

    <ul>
      {fakeTweets.map((tweet) => (
        <li>
          <div className={styles.content}>
            <img src={tweet.avatar} alt="Owner of tweet" />
            <div className={styles.text}>
              <strong>
                {tweet.name} <span>{tweet.user}</span> <time>{tweet.date}</time>
              </strong>
              <p>{tweet.text}</p>
              {tweet.image && (
                <div className={styles.picture}>
                  <img src={tweet.image} alt="just another post" />
                </div>
              )}
              <div className={styles.actions}>
                <a href="#">
                  <SvgLike /> {tweet.likes}
                </a>
                <a href="#">
                  <SvgComments />
                  {tweet.commetns}
                </a>
                <a href="#">
                  <SvgRetweet /> {tweet.retweets}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Timeline;
