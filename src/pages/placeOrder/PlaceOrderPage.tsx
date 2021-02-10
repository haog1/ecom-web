import React from 'react';
import { Col, Row } from 'antd';
import { CheckOutCard, PaymentForm } from 'components';

export const PlaceOrderPage: React.FC = () => {
  return (
    <div>
      <Row>
        <Col span={'12'}>
          <PaymentForm />
        </Col>
        <Col span={'12'}>{/* <CheckOutCard /> */}</Col>
      </Row>
    </div>
  );
};
