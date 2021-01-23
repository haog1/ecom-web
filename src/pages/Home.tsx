import { Col, Row } from 'antd';
import React from 'react';

import { FeatureCarousel, SideMenu } from 'components';
import { BaseLayout } from 'layouts/BaseLayout';

export const HomePage: React.FC = () => {
  return (
    <BaseLayout>
      <Row style={{ marginTop: 20 }}>
        <Col span={6}>
          <SideMenu />
        </Col>
        <Col span={18}>
          <FeatureCarousel />
        </Col>
      </Row>
    </BaseLayout>
  );
};
