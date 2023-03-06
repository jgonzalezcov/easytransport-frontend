import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFount from './views/notFound/NotFound';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Register from './views/register/Register';
import DataProvider from './contexts/DataProvider';
import Transport from './views/transportView/Transport';
import Client from './views/clientView/Client';
import { NewShipment } from './views/clientView/views/NewShipment';
import { ClientIndex } from './views/clientView/views/ClientIndex';
import { ListShipment } from './views/clientView/views/ListShipment';
import { EditProfile } from './views/clientView/views/EditProfile';
import { TransportIndex } from './views/transportView/views/TransportIndex';
import { TransportNewTrip } from './views/transportView/views/TransportNewTrip';
import { TransportListTrip } from './views/transportView/views/TransportListTrip';
import { TransportNewTruck } from './views/transportView/views/TransportNewTruck';
import {
  TransportConfigTruck,
  TransportconfigTruck,
} from './views/transportView/views/TransportConfigTruck';
import { TransportNewDriver } from './views/transportView/views/TransportNewDriver';
import { TransportEditProfile } from './views/transportView/views/TransportEditProfile';
import { TransportConfigDriver } from './views/transportView/views/TransportConfigDriver';

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
