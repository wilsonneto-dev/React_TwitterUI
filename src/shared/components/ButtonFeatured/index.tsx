import React from 'react';

import styles from './styles.module.scss';

export enum ButtonTheme {
  Light,
  Dark,
}

export enum ButtonSize {
  Medium,
  Small,
}

interface ButtonFeaturedProps {
  theme?: ButtonTheme;
  size?: ButtonSize;
}

const ButtonFeatured: React.FC<ButtonFeaturedProps> = ({
  children,
  theme = ButtonTheme.Dark,
  size = ButtonSize.Medium,
}) => (
  <>
    <button
      className={`${styles.featured} 
      ${theme === ButtonTheme.Light ? styles.light : ''} 
      ${size === ButtonSize.Small ? styles.small : ''}`}
    >
      {children}
    </button>
  </>
);

export default ButtonFeatured;
