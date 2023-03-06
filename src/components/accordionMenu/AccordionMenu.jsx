import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccordionMenu.module.scss';
import { DataContext } from '../../contexts/DataProvider';

function AcordionMenu({ menus }) {
  const navigate = useNavigate();
  const { setShow, SetTypeProfile } = React.useContext(DataContext);

  const goTo = (view) => {
    if (view === 'logout') {
      SetTypeProfile('none');
      navigate('/');
      localStorage.removeItem('token');
      return;
    }
    navigate(`./${view}`);
    setShow(false);
  };

  return (
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
  );
}

export default AcordionMenu;
