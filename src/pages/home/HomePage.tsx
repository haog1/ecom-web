import { Col, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import sideImage3 from 'assets/images/mock/sider_2019_02-04-2.png';
import sideImage2 from 'assets/images/mock/sider_2019_02-04.png';
import sideImage1 from 'assets/images/mock/sider_2019_12-09.png';
import { FeatureCarousel, FeaturedProductsList, SideMenu } from 'components';
import { BaseLayout } from 'layouts/BaseLayout';
import { API } from 'utils/api';

interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}

export const HomePage: React.FC<State> = () => {
  const { t } = useTranslation();
  const [homePageData, setHomePageData] = useState<State>({
    loading: true,
    error: null,
    productList: [],
  });

  const loadPageData = async () => {
    try {
      const { data } = await axios.get(
        `${API.backendApiUrl}/api/productCollections`,
      );
      setHomePageData({
        loading: false,
        error: null,
        productList: data,
      });
    } catch (err) {
      console.log(err, err.data);
      setHomePageData({
        loading: false,
        error: err.message,
        productList: [],
      });
    }
  };

  useEffect(() => {
    loadPageData();
  }, []);

  if (homePageData.loading) {
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
  }

  if (homePageData.error) {
    return (
      <div>
        <h1>Page error:</h1>
        <Typography.Text type={'danger'}>{homePageData.error}</Typography.Text>
      </div>
    );
  }

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
          products={homePageData.productList[0].touristRoutes}
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
          products={homePageData.productList[1].touristRoutes}
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
          products={homePageData.productList[2].touristRoutes}
        />
      </Row>
    </BaseLayout>
  );
};
