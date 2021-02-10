import React from 'react';
import styles from 'pages/shoppingCart/ShoppingCart.module.scss';
import { Affix, Col, Row } from 'antd';
import { ProductList, PaymentCard } from 'components';

export const ShoppingCartPage: React.FC = () => {
  return (
    <div>
      <Row>
        {/* Product list */}
        <Col span={'16'} className={styles['product-list-container']}></Col>
        {/* Payment card */}
        <Col span={'8'} className={styles['payment-card-container']}>
          <Affix></Affix>
        </Col>
      </Row>
    </div>
  );
};
