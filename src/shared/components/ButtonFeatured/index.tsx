import React, { Children } from 'react';

import styles from './styles.module.scss';

export enum ButtonTheme {
  Light,
  Dark,
}

interface ButtonFeaturedProps {
  theme?: ButtonTheme;
}

const ButtonFeatured: React.FC<ButtonFeaturedProps> = ({
  children,
  theme = ButtonTheme.Dark,
}) => (
  <>
    <button
      className={`${styles.featured} ${
        theme === ButtonTheme.Light ? styles.light : ''
      }`}
    >
      {children}
    </button>
  </>
);

export default ButtonFeatured;
