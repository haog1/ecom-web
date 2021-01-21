import React from 'react';
import styles from 'assets/css/app.module.css';
import { API } from 'utils/api';
import Robot from 'components/Robot';
import { robots } from 'mockdata/robots.json';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map(({ id, name, email }) => (
          <Robot key={id} id={id} name={name} email={email}></Robot>
        ))}
      </div>
    </div>
  );
}

export default App;
