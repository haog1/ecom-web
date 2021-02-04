import { BaseLayout, UserLayout } from 'layouts';
import React, { Fragment } from 'react';
import { Route as DefaultRoute } from 'react-router-dom';

interface DefaultRouteProps {
  component: any;
  layout?: any;
  path: string;
  exact?: boolean;
}

type RouteProps = Partial<DefaultRouteProps>;

export const LayoutRoute: React.FC<RouteProps> = ({
  component: Component,
  layout: Layout = BaseLayout,
  ...rest
}) => {
  return (
    <DefaultRoute
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
