import styles from './Footer.module.scss';
import { Layout, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AppFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout.Footer className={styles.App}>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        {t('footer.detail')}
      </Typography.Title>
    </Layout.Footer>
  );
};
