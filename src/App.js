import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFount from './views/notFound/NotFound';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Register from './views/register/Register';
import DataProvider from './contexts/DataProvider';
import Transport from './views/transportView/Transport';
import Client from './views/clientView/Client';

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
              <Route path="/client" element={<Client />} />
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
