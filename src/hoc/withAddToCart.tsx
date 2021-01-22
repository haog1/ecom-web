import React, { useContext } from 'react';
import { SetAppStateContext } from 'context/App';
import { RobotProps } from 'components/Robot';

export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>,
) => {
  return (props: any) => {
    const setAppState = useContext(SetAppStateContext);
    const addToCart = (id: number, name: string) => {
      if (setAppState) {
        setAppState(state => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};
