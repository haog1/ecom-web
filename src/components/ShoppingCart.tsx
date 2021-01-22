import React, { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

import styles from 'assets/css/shoppingCart.module.css';
import { AppContext } from 'context/App';

export const ShoppingCart: React.FC = props => {
  const appState = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cartContainer}>
      <button onClick={handleClick} className={styles.button}>
        <FiShoppingCart />
        <span>Shopping Cart ({appState.shoppingCart.items.length})</span>
      </button>
      <div
        className={styles.cartDropDown}
        style={{
          display: isOpen ? 'block' : 'none',
        }}
      >
        <ul>
          {appState.shoppingCart.items.map(item => (
            <li key={uuid()}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
