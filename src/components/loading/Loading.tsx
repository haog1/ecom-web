import { Spin } from 'antd';
import React from 'react';

export const Loading: React.FC = () => {
  return (
    <Spin
      style={{
        zIndex: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
