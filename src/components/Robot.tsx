import React, { useContext } from 'react';

import styles from 'assets/css/robot.module.css';
import { AppContext } from 'context/App';
import { withAddToCart } from 'hoc/withAddToCart';

export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id: number, name: string) => void;
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const appState = useContext(AppContext);

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

export default withAddToCart(Robot);
