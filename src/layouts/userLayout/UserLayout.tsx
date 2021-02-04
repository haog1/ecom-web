import React from 'react';
import styles from 'assets/scss/Global.module.scss';
import { Layout } from 'antd';

export const UserLayout: React.FC = props => {
  return (
    <div className={styles.App}>
      <h1>User Layout</h1>
      <Layout.Content className={styles.App__inner}>
        <div children={props.children} />
      </Layout.Content>
    </div>
  );
};
