import React from 'react';
import styles from 'assets/css/Global.module.css';
import { AppHeader, AppFooter } from 'components';

export const BaseLayout: React.FC = props => {
  return (
    <div className={styles.App}>
      <AppHeader />
      <div className={styles['page-content']} children={props.children} />
      <AppFooter />
    </div>
  );
};
