<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFount from './views/notFound/NotFound'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import Register from './views/register/Register'
import DataProvider from './contexts/DataProvider'
import Transport from './views/transportView/Transport'
import Client from './views/clientView/Client'
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFount from './views/notFound/NotFound';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Register from './views/register/Register';
import Trip from './views/trip/Trip';
import RegisterTruck from './views/registerTruck/RegisterTruck';
import RegisterDiver from './views/registerDriver/RegisterDiver';
import DataProvider from './contexts/DataProvider';
import Transport from './views/transport/Transport';
import { Client } from './views/client/Client';
>>>>>>> Stashed changes
function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navbar />
<<<<<<< Updated upstream
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/client" element={<Client />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
=======
          <div className="view-container">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/trip" element={<Trip />} />
              <Route path="/truck" element={<RegisterTruck />} />
              <Route path="/driver" element={<RegisterDiver />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/client" element={<Client />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFount />} />
            </Routes>
          </div>
>>>>>>> Stashed changes
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
