import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFount from './views/notFound/NotFound'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import Register from './views/register/Register'
import Trip from './views/trip/Trip'
import RegisterTruck from './views/registerTruck/RegisterTruck'
import RegisterDiver from './views/registerDriver/RegisterDiver'
import DataProvider from './contexts/DataProvider'
function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/truck" element={<RegisterTruck />} />
            <Route path="/driver" element={<RegisterDiver />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App