import { Button, Col, DatePicker, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Loading } from 'components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'redux/hooks';
import { getProductDetailsCreator } from 'redux/slices/singleProductDetails';
import { addShoppingCartItem } from 'redux/slices/shoppingCart';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const ProductPage: React.FC<
  RouteComponentProps<MatchParams>
> = props => {
  const token = useSelector(state => state.userLoginReducer.token);
  const shoppingCartLoading = useSelector(
    state => state.shoppingCartReducer.loading,
  );
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
        <Row>
          <Typography.Text type={'danger'}>
            {productDetailsFromState.error}
          </Typography.Text>
        </Row>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <Row>
          <Button
            style={{
              marginTop: 50,
              marginBottom: 30,
              display: 'block',
            }}
            type="primary"
            danger
            loading={shoppingCartLoading}
            onClick={() => {
              if (token) {
                dispatch(
                  addShoppingCartItem({
                    token,
                    touristRouteId: productDetailsFromState.data.id,
                  }),
                );
              }
            }}
          >
            <ShoppingCartOutlined />
            Add to Cart
          </Button>
        </Row>
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
