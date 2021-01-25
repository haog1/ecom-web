import { GlobalOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from 'assets/icons/logo.svg';
import reduxStore from 'redux/store';

import styles from './Header.module.css';

interface LanguageProps {
  language: string;
  languageList: {
    name: string;
    code: string;
  }[];
}

export const AppHeader: React.FC = () => {
  const history = useHistory();

  // Handle change language
  const handleChangeLanguage = (language: string) => {
    const action = {
      type: 'langauges/updateCurrLanguage',
      payload: {
        language,
      },
    };
    reduxStore.dispatch(action);
  };

  // create local state language varable
  const [currLan, setCurrLan] = useState<LanguageProps>({
    language: 'en',
    languageList: [],
  });

  let languageStore = reduxStore.getState();
  useEffect(() => {
    reduxStore.subscribe(() => {
      const newLanState = reduxStore.getState();
      setCurrLan({
        language: newLanState.language,
        languageList: newLanState.languageList,
      });
    });
  }, []);

  useEffect(() => {
    setCurrLan(languageStore);
    console.log('1', languageStore, currLan);
  }, [languageStore]);

  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>Makes Travelling easier</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                {currLan.languageList.map(lan => (
                  <Menu.Item
                    key={lan.code}
                    onClick={() => handleChangeLanguage(lan.code)}
                  >
                    {lan.name}
                  </Menu.Item>
                ))}
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {currLan.language}
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => history.push('signup')}>Signup</Button>
            <Button onClick={() => history.push('login')}>Login</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => history.push('/')}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            React Travel
          </Typography.Title>
        </span>
        <Input.Search
          placeholder={'请输入旅游目的地、主题、或关键字'}
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu mode={'horizontal'} className={styles['main-menu']}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  );
};
