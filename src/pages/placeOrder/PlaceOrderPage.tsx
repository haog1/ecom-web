import React from 'react';
import { Col, Row } from 'antd';
import { CheckOutCard, PaymentForm } from 'components';
import { useSelector } from 'redux/hooks';
import { placeOrder } from 'redux/slices/order';
import { useDispatch } from 'react-redux';

export const PlaceOrderPage: React.FC = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.userLoginReducer.token);
  const order = useSelector(state => state.orderReducer.currentOrder);
  const loading = useSelector(state => state.orderReducer.loading);

  return (
    <div>
      <Row>
        <Col span={'12'}>
          <PaymentForm />
        </Col>
        <Col span={'12'}>
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckout={() => {
              dispatch(
                placeOrder({
                  token: userToken || '',
                  orderId: order.id,
                }),
              );
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
