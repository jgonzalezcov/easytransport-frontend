import React from 'react'
import { useState } from 'react'
export const DataContext = React.createContext()

const DataProvider = (props) => {
  const [user, setUser] = useState('Hola')

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
