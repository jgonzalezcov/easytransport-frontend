import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import './transportStyle.css';
import Drawer from './components/drawerMenu/Drawer';
import { Outlet } from 'react-router-dom';
const Transport = () => {
  return (
    <div className="container-transport">
      <Drawer />

      <div className="container-view">
        <Outlet />
      </div>
    </div>
  );
};

export default Transport;
