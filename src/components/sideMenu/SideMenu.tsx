import React from 'react';
import styles from './SideMenu.module.css';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';
import { sideMenuList } from './mock';

interface MenuList {
  title: string;
  subMenu: {
    title: string;
    subMenu: string[];
  }[];
}

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((menu: MenuList, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {menu.title}
            </span>
          }
          children={menu.title}
        />
      ))}
    </Menu>
  );
};
