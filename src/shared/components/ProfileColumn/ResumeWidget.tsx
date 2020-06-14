import React from 'react';

import { ReactComponent as SvgBorn } from 'assets/icons/born.svg';
import { ReactComponent as SvgUrl } from 'assets/icons/url.svg';
import { ReactComponent as SvgJoined } from 'assets/icons/joined.svg';
import { ReactComponent as SvgPlace } from 'assets/icons/place.svg';

import styles from './styles.module.scss';

const ResumeWidget: React.FC = () => (
  <>
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
  </>
);

export default ResumeWidget;
