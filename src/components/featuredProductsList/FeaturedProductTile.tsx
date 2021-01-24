import React from 'react';
import { Image, Typography } from 'antd';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

interface ProductTileProps extends RouteComponentProps {
  id: number | string;
  size: 'large' | 'small';
  imageSrc: string;
  title: string;
  price: string;
}

const FeaturedProductTileComponent: React.FC<ProductTileProps> = ({
  id,
  title,
  price,
  imageSrc,
  size,
  history,
  location,
  match,
}) => {
  return (
    <Link to={`/product/${id}`}>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type={'secondary'}>
          {title.length > 25 ? title.slice(0, 22) + '...' : title}
        </Typography.Text>
        <Typography.Text type={'danger'} strong>
          From A${price}
        </Typography.Text>
      </div>
    </Link>
  );
};

export const FeaturedProductTile = withRouter(FeaturedProductTileComponent);
