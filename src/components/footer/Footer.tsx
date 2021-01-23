import React from 'react';
import { Layout, Typography } from 'antd';

export const AppFooter: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        Copyright @ React Travel
      </Typography.Title>
    </Layout.Footer>
  );
};
