import React from 'react'
import { DataContext } from '../../contexts/DataProvider'
import './transportStyle.css'
import Drawer from './components/drawerMenu/Drawer'
import Trip from './components/trip/Trip'
import Truck from './components/registerTruck/RegisterTruck'
import RegisterDiver from './components/registerDriver/RegisterDiver'
import EditRegister from '../../components/editregister/EditRegister'
const Transport = () => {
  const { view } = React.useContext(DataContext)
  return (
    <div className="container-transport">
      <Drawer />

      <div className="container-view">
        {view === 'newTrip' ? (
          <Trip />
        ) : view === 'newTruck' ? (
          <Truck />
        ) : view === 'newDriver' ? (
          <RegisterDiver />
        ) : view === 'editProfile' ? (
          <EditRegister />
        ) : (
          <div className="prueba">
            {' '}
            <h3>{view}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transport
