import React, { useEffect } from 'react';
import styles from 'pages/shoppingCart/ShoppingCart.module.scss';
import { Affix, Col, Row } from 'antd';
import { ProductList, PaymentCard } from 'components';
import { useSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { clearShoppingCartItem } from 'redux/slices/shoppingCart';

export const ShoppingCartPage: React.FC = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.userLoginReducer.token) || '';
  const shoppingCartReducerData = useSelector(
    state => state.shoppingCartReducer,
  );

  return (
    <div>
      <Row>
        {/* Product list */}
        <Col span={'16'}>
          <ProductList
            data={shoppingCartReducerData.items.map(item => item.touristRoute)}
          />
        </Col>
        {/* Payment card */}
        <Col span={'8'}>
          <PaymentCard
            loading={shoppingCartReducerData.loading}
            originalPrice={shoppingCartReducerData.items
              .map(s => s.originalPrice)
              .reduce((a, b) => a + b, 0)}
            price={shoppingCartReducerData.items
              .map(
                s =>
                  s.originalPrice * (s.discountPresent ? s.discountPresent : 1),
              )
              .reduce((a, b) => a + b, 0)}
            onCheckout={() => {}}
            onShoppingCartClear={() => {
              dispatch(
                clearShoppingCartItem({
                  token: userToken,
                  itemIds: shoppingCartReducerData.items.map(item => item.id),
                }),
              );
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
