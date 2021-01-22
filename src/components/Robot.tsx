import React, { useContext } from 'react';
import styles from 'assets/css/robot.module.css';
import { AppContext, SetAppStateContext } from 'context/App';

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const appState = useContext(AppContext);
  const setAppState = useContext(SetAppStateContext);

  const handleAddToCart = () => {
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

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <h2>Context: {appState.username}</h2>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Robot;
