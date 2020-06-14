import React from 'react';

import styles from './styles.module.scss';

const fakeData = [
  '#BlackLivesMatter',
  '#StayHome',
  '#AllAgainstCOVID',
  '#NoTechForIce',
  '#BlackLivesMatter',
  '#StayHome',
  '#AllAgainstCOVID',
  '#NoTechForIce',
];

const TrendsSuggest: React.FC = () => (
  <div className={styles.container}>
    <header>
      <strong>Trends</strong>
      <a href="#">Change</a>
    </header>
    <ul>
      {fakeData.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  </div>
);

export default TrendsSuggest;
