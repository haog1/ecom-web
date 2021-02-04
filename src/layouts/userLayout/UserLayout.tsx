import { Layout } from 'antd';
import React from 'react';

import styles from './UserLayout.module.scss';

export const UserLayout: React.FC = props => {
  return (
    <Layout className={styles.App}>
      <Layout.Content className={styles.App__inner}>
        <div children={props.children} />
      </Layout.Content>
    </Layout>
  );
};
