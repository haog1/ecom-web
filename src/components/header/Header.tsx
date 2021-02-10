import { GlobalOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd';
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import logo from 'assets/icons/logo.svg';
import { useSelector } from 'redux/hooks';
import { ChangeLanguageSlice } from 'redux/slices/language';
import { UserLoginSlice } from 'redux/slices/login';

import styles from './Header.module.scss';

interface JwtPayload extends DefaultJwtPayload {
  username: string;
}

interface DefaultMenuLanguageProp {
  name: string;
  code: string;
}

const languageList: DefaultMenuLanguageProp[] = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: '中文',
    code: 'zh',
  },
];

export const AppHeader: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const languageReducer = useSelector(state => state.languageReducer);
  const loginToken = useSelector(state => state.userLoginReducer.token);
  const dispatch = useDispatch();
  const shoppingCartItems = useSelector(
    state => state.shoppingCartReducer.items,
  );
  const shoppingCartLoading = useSelector(
    state => state.shoppingCartReducer.loading,
  );
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (loginToken) {
      const token = jwt_decode<JwtPayload>(loginToken);
      setUsername(token.username);
    }
  }, [loginToken]);

  const handleChangeLanguage = (lang: string) => {
    dispatch(ChangeLanguageSlice.actions.switchLanguage(lang));
  };

  const onLogout = () => {
    dispatch(UserLoginSlice.actions.logout());
    history.push('/');
  };

  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text children={t('header.slogan')} />
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                {languageList.map(lan => (
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
            {languageReducer.language}
          </Dropdown.Button>
          {loginToken ? (
            <Button.Group className={styles['button-group']}>
              <span>
                {t('header.welcome')}
                <Typography.Text strong>{username}</Typography.Text>
              </span>
              <Button
                loading={shoppingCartLoading}
                onClick={() => {
                  history.push('/shopping-cart');
                }}
              >
                {t('header.shoppingCart')}({shoppingCartItems.length})
              </Button>
              <Button onClick={onLogout}>{t('header.signOut')}</Button>
            </Button.Group>
          ) : (
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/signup')}>
                {t('header.signup')}
              </Button>
              <Button onClick={() => history.push('/login')}>
                {t('header.login')}
              </Button>
            </Button.Group>
          )}
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            {t('header.title')}
          </Typography.Title>
        </Link>
        <Input.Search
          placeholder={'请输入旅游目的地、主题、或关键字'}
          className={styles['search-input']}
          onSearch={keywords => history.push('/search/' + keywords)}
        />
      </Layout.Header>
      <Menu mode={'horizontal'} className={styles['main-menu']}>
        <Menu.Item key={1} children={t('header.home_page')} />
        <Menu.Item key={2} children={t('header.weekend')} />
        <Menu.Item key={3} children={t('header.group')} />
        <Menu.Item key="4" children={t('header.backpack')} />
        <Menu.Item key="5" children={t('header.private')} />
        <Menu.Item key="6" children={t('header.cruise')} />
        <Menu.Item key="7" children={t('header.hotel')} />
        <Menu.Item key="8" children={t('header.local')} />
        <Menu.Item key="9" children={t('header.theme')} />
        <Menu.Item key="10" children={t('header.custom')} />
        <Menu.Item key="11" children={t('header.study')} />
        <Menu.Item key="12" children={t('header.visa')} />
        <Menu.Item key="13" children={t('header.enterprise')} />
        <Menu.Item key="14" children={t('header.high_end')} />
        <Menu.Item key="15" children={t('header.outdoor')} />
        <Menu.Item key="16" children={t('header.insurance')} />
      </Menu>
    </div>
  );
};
