import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  touristRouteId: string;
}

export const ProductPage: React.FC<
  RouteComponentProps<MatchParams>
> = props => {
  return <h1>Single Product Page {props.match.params.touristRouteId}</h1>;
};
