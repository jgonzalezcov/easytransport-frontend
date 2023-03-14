import React from 'react'
import './clientStyle.css'
import { Outlet } from 'react-router-dom'
import DrawerMenu from '../../components/drawerMenu/Drawer'
import { getMenu } from '../../helpers/Menu.helpers'

const menus = getMenu('client')

const Client = () => {
  return (
    <div className="container-transport">
      <DrawerMenu menus={menus} />
      <div className="container-view">
        <Outlet />
      </div>
    </div>
  )
}

export default Client
