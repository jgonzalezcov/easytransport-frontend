import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import './clientStyle.css';
import Drawer from './components/drawerMenu/Drawer';
import { Outlet } from 'react-router-dom';
const Client = () => {
  return (
    <div className="container-transport">
      <Drawer />

      <div className="container-view">
        <Outlet />
      </div>
    </div>
  );
};

export default Client;
