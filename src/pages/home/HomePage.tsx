import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import sideImage3 from 'assets/images/mock/sider_2019_02-04-2.png';
import sideImage2 from 'assets/images/mock/sider_2019_02-04.png';
import sideImage1 from 'assets/images/mock/sider_2019_12-09.png';
import {
  Error,
  FeatureCarousel,
  FeaturedProductsList,
  Loading,
  SideMenu,
} from 'components';
import { useSelector } from 'redux/hooks';
import { getProductsListCreator } from 'redux/slices/featuredProductsList';

export const HomePage: React.FC = () => {
  const homePageDataFromState = useSelector(
    state => state.featuredProductsListReducer,
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const loadPageData = () => dispatch(getProductsListCreator());

  useEffect(() => {
    loadPageData();
  }, []);

  if (homePageDataFromState.loading) {
    return <Loading />;
  }

  if (homePageDataFromState.error) {
    return <Error>{homePageDataFromState.error}</Error>;
  }

  return (
    <React.Fragment>
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
          products={homePageDataFromState.data[0].touristRoutes}
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
          products={homePageDataFromState.data[1].touristRoutes}
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
          products={homePageDataFromState.data[2].touristRoutes}
        />
      </Row>
    </React.Fragment>
  );
};
