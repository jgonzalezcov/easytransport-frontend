import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import NotFount from '../views/notFound/NotFound'
import Navbar from '../components/navbar/Navbar'
import Home from '../views/home/Home'
import Register from '../views/register/Register'
import { DataContext } from '../contexts/DataProvider'
import Transport from '../views/transport/Transport'
import Client from '../views/client/Client'
import { ClientNewShipment } from '../views/client/views/ClientNewShipment'
import { ClientListShipment } from '../views/client/views/ClientListShipment'
import { ClientEditProfile } from '../views/client/views/ClientEditProfile'
import { ClientEditShipment } from '../views/client/views/ClientEditShipment'
import { TransportNewTrip } from '../views/transport/views/TransportNewTrip'
import { TransportListTrip } from '../views/transport/views/TransportListTrip'
import { TransportNewTruck } from '../views/transport/views/TransportNewTruck'
import { TransportEditTruck } from '../views/transport/views/TransportEditTruck'
import { TransportConfigTruck } from '../views/transport/views/TransportConfigTruck'
import { TransportNewDriver } from '../views/transport/views/TransportNewDriver'
import { TransportEditProfile } from '../views/transport/views/TransportEditProfile'
import { TransportConfigDriver } from '../views/transport/views/TransportConfigDriver'
import { TransportEditTrip } from '../views/transport/views/TransportEditTrip copy'
import { TransportEditDriver } from '../views/transport/views/TransportEditDriver'
import NotAuthorized from '../views/notAuthorized/NotAuthorized'
import { getTokenData } from '../helpers/Token.helper'

export const AppRouter = () => {
  const { isAuth } = useContext(DataContext)

  const tokenData = getTokenData()
  const isTransport = tokenData && tokenData.role === 'transport'
  const isClient = tokenData && tokenData.role === 'client'

  useEffect(() => {}, [isAuth])

  return (
    <BrowserRouter>
      <Navbar />
      <div className="view-container">
        <Routes>
          <Route path="/register" element={<Register />} />
          {isTransport ? (
            <Route path="/transport" element={<Transport />}>
              <Route index element={<TransportListTrip />} />
              <Route path="newTrip" element={<TransportNewTrip />} />
              <Route path="listTrip" element={<TransportListTrip />} />
              <Route path="newTruck" element={<TransportNewTruck />} />
              <Route path="editTrip/:id" element={<TransportEditTrip />} />
              <Route path="editTruck/:id" element={<TransportEditTruck />} />
              <Route path="configTruck" element={<TransportConfigTruck />} />
              <Route path="configDriver" element={<TransportConfigDriver />} />
              <Route path="newDriver" element={<TransportNewDriver />} />
              <Route path="editDriver/:id" element={<TransportEditDriver />} />
              <Route path="editProfile" element={<TransportEditProfile />} />
            </Route>
          ) : (
            <Route path="/*" element={<NotAuthorized />} />
          )}
          {isClient ? (
            <Route path="/client" element={<Client />}>
              <Route index element={<ClientListShipment />} />
              <Route path="newShipment" element={<ClientNewShipment />} />
              <Route path="listShipment" element={<ClientListShipment />} />
              <Route path="editShipment/:id" element={<ClientEditShipment />} />
              <Route path="editProfile" element={<ClientEditProfile />} />
            </Route>
          ) : (
            <Route path="/*" element={<NotAuthorized />} />
          )}
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFount />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
