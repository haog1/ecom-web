import React, { useContext } from 'react';

import styles from 'assets/css/robot.module.css';
import { AppContext } from 'context/App';
import { useAddToCart } from 'hooks/useAddToCart';

interface RobotDiscountProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotDiscountProps> = ({ id, name, email }) => {
  const appState = useContext(AppContext);
  const addToCart = useAddToCart();

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <h2>Context: {appState.username}</h2>
      <button onClick={() => addToCart(id, name)}>Add to cart</button>
    </div>
  );
};

export default Robot;
