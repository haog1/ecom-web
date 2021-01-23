import React from 'react';
import styles from 'assets/css/App.module.css';
import { AppHeader, AppFooter } from 'components';
import { Row, Col } from 'antd';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6} style={{ border: '1px solid black' }}>
            <div className="menus">Menus</div>
          </Col>
          <Col span={18} style={{ border: '1px solid gray' }}>
            <div>Feature Sliders</div>
          </Col>
        </Row>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
