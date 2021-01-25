import React from 'react';
import styles from 'assets/scss/Global.module.scss';
import { Layout } from 'antd';
import { AppHeader, AppFooter } from 'components';

export const BaseLayout: React.FC = props => {
  return (
    <div className={styles.App}>
      <AppHeader />
      <Layout.Content className={styles.App__inner}>
        <div children={props.children} />
      </Layout.Content>
      <AppFooter />
    </div>
  );
};
