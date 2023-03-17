import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import './transportStyle.css';
import { Outlet } from 'react-router-dom';
import DrawerMenu from '../../components/drawerMenu/Drawer';
import { getMenu } from '../../helpers/Menu.helpers';
const menus = getMenu('transport');

const Transport = () => {
  return (
    <div className="container-transport">
      <DrawerMenu menus={menus} />

      <div className="container-view">
        <Outlet />
      </div>
    </div>
  );
};

export default Transport;
