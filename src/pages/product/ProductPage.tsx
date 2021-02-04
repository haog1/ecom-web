import { Col, DatePicker, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { Loading } from 'components';
import { useSelector } from 'redux/hooks';
import { getProductDetailsCreator } from 'redux/slices/singleProductDetails';

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const ProductPage: React.FC<
  RouteComponentProps<MatchParams>
> = props => {
  const { touristRouteId } = useParams<MatchParams>();
  const dispatch = useDispatch();
  const productDetailsFromState = useSelector(
    state => state.singleProductReducer,
  );

  const loadPageData = () => dispatch(getProductDetailsCreator(touristRouteId));

  useEffect(() => {
    loadPageData();
  }, []);

  if (productDetailsFromState.loading) {
    return <Loading />;
  }

  if (productDetailsFromState.error) {
    return (
      <div>
        <h1>Page error:</h1>
        <Typography.Text type={'danger'}>
          {productDetailsFromState.error}
        </Typography.Text>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <Row>
          <Col span={13}></Col>
          <Col span={11}>
            <RangePicker open />
          </Col>
        </Row>
      </div>
    </div>
  );
};
