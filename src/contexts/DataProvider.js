import React from 'react'
import { useState } from 'react'
import { getDefaultProfile } from '../helpers/Menu.helpers'
export const DataContext = React.createContext()

const DataProvider = (props) => {
  const defaultProfile = getDefaultProfile()
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
  const [isAuth, setIsAuth] = useState(false)

  const [typeProfile, SetTypeProfile] = useState(defaultProfile)

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
        SetTypeProfile,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
