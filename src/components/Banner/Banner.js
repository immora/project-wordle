import React from 'react';
import clsx from 'clsx';

import styles from './Banner.module.css';

function Banner({ status, children }) {
  return (
    <div className={clsx(styles.banner, styles[status])}>
      {children}
    </div>
  );
}

export default Banner;
