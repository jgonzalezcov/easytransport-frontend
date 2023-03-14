import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Drawer.module.scss'
import { DataContext } from '../../contexts/DataProvider'

function DrawerMenu({ menus }) {
  const navigate = useNavigate()
  const handleClose = () => setShow(false)
  const { show, setShow, SetTypeProfile } = React.useContext(DataContext)
  const goTo = (view) => {
    if (view === 'logout') {
      SetTypeProfile('none')
      navigate('/')
      localStorage.removeItem('token')
      return
    }
    navigate(`./${view}`)
    setShow(false)
  }
  return (
    <div className="container-drawer">
      <Offcanvas className={styles.MenuDrawer} show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeVariant="black"
          className="header-drawer"
        >
          <Offcanvas.Title>{/* Menú Tranportista */}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="body-drawer">
          <div>
            {menus.map((e, i) => (
              <div className={styles.AccordionMenu} key={`${e.url}-${i}`}>
                {e.parent && e.icon && (
                  <div className={styles.parent}>
                    <FontAwesomeIcon className={styles.icon} icon={e.icon} />
                    <span>{e.title}</span>
                  </div>
                )}
                {!e.parent && (
                  <div className={styles.child} onClick={() => goTo(e.url)}>
                    {e.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DrawerMenu
