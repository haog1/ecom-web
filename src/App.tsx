import React, { useEffect, useState } from 'react';

import styles from 'assets/css/app.module.css';
import logo from 'assets/icons/logo.svg';
import Robot from 'components/Robot';
import { RobotDiscount } from 'components/RobotDiscount';
import { ShoppingCart } from 'components/ShoppingCart';
import { API } from 'utils/api';

interface Props {}

const App: React.FC<Props> = (props: Props) => {
  const [robots, setRobots] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fecthData = async () => {
    try {
      const res = await fetch(API.baseUrl + '/users');
      const robots = await res.json();
      setRobots(robots);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="logo" />
        <h1>Title</h1>
      </div>
      <ShoppingCart />
      {error ? (
        <p style={{ color: 'red' }}>Error occurred - {error.message}</p>
      ) : null}

      {!loading ? (
        <div className={styles.robotList}>
          {robots?.map(({ id, name, email }, index) =>
            index % 2 === 0 ? (
              <RobotDiscount key={id} id={id} name={name} email={email} />
            ) : (
              <Robot key={id} id={id} name={name} email={email} />
            ),
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
