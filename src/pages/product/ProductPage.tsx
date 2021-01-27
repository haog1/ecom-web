import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { useSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { loadProductDetailsCreator } from 'redux/singleProductDetails/singleProductDetailsActions';
import { Spin, Typography } from 'antd';

interface MatchParams {
  touristRouteId: string;
}

export const ProductPage: React.FC<
  RouteComponentProps<MatchParams>
> = props => {
  const { touristRouteId } = useParams<MatchParams>();
  const dispatch = useDispatch();
  const productDetailsFromState = useSelector(
    state => state.singleProductDetailsReducer,
  );
  const loadPageData = () =>
    dispatch(loadProductDetailsCreator(touristRouteId));

  useEffect(() => {
    loadPageData();
  }, []);

  if (productDetailsFromState.loading) {
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

  return <h1>{productDetailsFromState.name}</h1>;
};
