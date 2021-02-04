import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { FilterArea, Loading, ProductList, Error } from 'components';
import styles from 'pages/search/SearchPage.module.scss';
import { useSelector } from 'redux/hooks';
import { searchProduct } from 'redux/slices/search';

interface MatchedParams {
  keywords: string;
}

export const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { keywords } = useParams<MatchedParams>();
  const searchPageData = useSelector(state => state.productSearchReducer);

  const loadSearchResult = () =>
    dispatch(
      searchProduct({
        keywords,
        nextPage: 1,
        pageSize: 10,
      }),
    );

  useEffect(() => {
    loadSearchResult();
  }, [location]); // Watch on url changes

  const onPageChange = (
    nextPage: number | string,
    pageSize: number | string,
  ) => {
    dispatch(searchProduct({ keywords, nextPage, pageSize }));
  };

  if (searchPageData.loading) {
    return <Loading />;
  }

  if (searchPageData.error) {
    return <Error>{searchPageData.error}</Error>;
  }

  console.log(searchPageData);

  return (
    <div>
      <div className={styles['page-content']}>
        <div className={styles['product-list-container']}>
          <FilterArea />
        </div>
        <div className={styles['product-list-container']}>
          <ProductList
            data={searchPageData.data}
            paging={searchPageData.pagination}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};
