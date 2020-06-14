import React from 'react';

import styles from './styles.module.scss';

const Search: React.FC = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search on Twitter"
    />
  );
};

export default Search;
