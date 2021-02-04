import { Typography } from 'antd';
import React from 'react';

export const Error: React.FC = ({ children }) => {
  return (
    <div>
      <h1>Page error:</h1>
      <Typography.Text type={'danger'} children={children} />
    </div>
  );
};
