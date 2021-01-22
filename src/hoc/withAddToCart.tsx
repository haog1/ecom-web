import React, { useContext } from 'react';

import { SetAppStateContext } from 'context/App';

export const withAddToCart = (ChildComponent: React.ComponentType) => {
  const setAppState = useContext(SetAppStateContext);

  const addToCart = (id: number, name: string) => {
    if (setAppState) {
      setAppState(appState => {
        return {
          ...appState,
          shoppingCart: {
            items: [...appState.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };

  return (props: any) => {
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};