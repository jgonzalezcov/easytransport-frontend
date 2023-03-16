import DataProvider from './contexts/DataProvider'

import { AppRouter } from './router/AppRouter'
function App() {
  return (
    <div className="App">
      <DataProvider>
        <AppRouter />
      </DataProvider>
    </div>
  )
}

export default App
