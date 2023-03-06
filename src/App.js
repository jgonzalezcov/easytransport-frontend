import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFount from './views/notFound/NotFound';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Register from './views/register/Register';
import DataProvider from './contexts/DataProvider';
import Transport from './views/transport/Transport';
import Client from './views/client/Client';
import { NewShipment } from './views/client/views/NewShipment';
import { ClientIndex } from './views/client/views/ClientIndex';
import { ListShipment } from './views/client/views/ListShipment';
import { EditProfile } from './views/client/views/EditProfile';
import { TransportNewTrip } from './views/transport/views/TransportNewTrip';
import { TransportListTrip } from './views/transport/views/TransportListTrip';
import { TransportNewTruck } from './views/transport/views/TransportNewTruck';
import { TransportConfigTruck } from './views/transport/views/TransportConfigTruck';
import { TransportNewDriver } from './views/transport/views/TransportNewDriver';
import { TransportEditProfile } from './views/transport/views/TransportEditProfile';
import { TransportConfigDriver } from './views/transport/views/TransportConfigDriver';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <div className="view-container">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/transport" element={<Transport />} />

              <Route path="/transport" element={<Transport />}>
                <Route index element={<TransportListTrip />} />
                <Route path="newTrip" element={<TransportNewTrip />} />
                <Route path="listTrip" element={<TransportListTrip />} />
                <Route path="newTruck" element={<TransportNewTruck />} />
                <Route path="configTruck" element={<TransportConfigTruck />} />
                <Route
                  path="configDriver"
                  element={<TransportConfigDriver />}
                />
                <Route path="newDriver" element={<TransportNewDriver />} />
                <Route path="editProfile" element={<TransportEditProfile />} />
              </Route>

              <Route path="/client" element={<Client />}>
                <Route index element={<ClientIndex />} />
                <Route path="newShipment" element={<NewShipment />} />
                <Route path="listShipment" element={<ListShipment />} />
                <Route path="editProfile" element={<EditProfile />} />
              </Route>

              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFount />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
