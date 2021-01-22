import React, { useState, Dispatch } from 'react';

interface AppContextProps {
  username: string;
  shoppingCart: {
    items: {
      id: number;
      name: string;
    }[];
  };
}

const defaultAppContextValue: AppContextProps = {
  username: 'Test',
  shoppingCart: {
    items: [],
  },
};

export const AppContext = React.createContext(defaultAppContextValue);

export const SetAppStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppContextProps>> | undefined
>(undefined);

export const AppContextProvider: React.FC = props => {
  const [appState, setAppState] = useState(defaultAppContextValue);

  return (
    <AppContext.Provider value={appState}>
      <SetAppStateContext.Provider value={setAppState}>
        {props.children}
      </SetAppStateContext.Provider>
    </AppContext.Provider>
  );
};
