import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import sideImage3 from 'assets/images/mock/sider_2019_02-04-2.png';
import sideImage2 from 'assets/images/mock/sider_2019_02-04.png';
import sideImage1 from 'assets/images/mock/sider_2019_12-09.png';
import { FeatureCarousel, FeaturedProductsList, SideMenu } from 'components';
import { BaseLayout } from 'layouts/BaseLayout';

import { productList1, productList2, productList3 } from '../../mockup';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <BaseLayout>
      <Row align="middle" justify="center" style={{ marginTop: 20 }}>
        <Col span={6}>
          <SideMenu />
        </Col>
        <Col span={18}>
          <FeatureCarousel />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <FeaturedProductsList
          title={
            <Typography.Title level={2} type="warning">
              {t('home_page.hot_recommended')}
            </Typography.Title>
          }
          sideImage={sideImage1}
          products={productList1}
        />
      </Row>
      <Row align="middle" justify="center">
        <FeaturedProductsList
          title={
            <Typography.Title level={2} type="danger">
              {t('home_page.new_arrival')}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
      </Row>
      <Row align="middle" justify="center">
        <FeaturedProductsList
          title={
            <Typography.Title level={2} type="success">
              {t('home_page.domestic_travel')}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
      </Row>
    </BaseLayout>
  );
};
