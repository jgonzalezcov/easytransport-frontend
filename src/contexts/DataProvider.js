import React from 'react'
import { useState } from 'react'
export const DataContext = React.createContext()

const DataProvider = (props) => {
  const [profile, setProfile] = useState({
    name: 'Juan',
    lastName: 'González',
    phone: '01010101',
    email: 'jgonzalez@gmail.com',
    address: 'Mi casa',
    img: './foto.jpg',
  })
  const [view, setView] = useState('profile')
  const [show, setShow] = useState(false)
  const [typeProfile, SettypeProfile] = useState('client')

  return (
    <DataContext.Provider
      value={{
        profile,
        setProfile,
        view,
        setView,
        show,
        setShow,
        typeProfile,
        SettypeProfile,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
