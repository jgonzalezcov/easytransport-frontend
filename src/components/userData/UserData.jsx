import React from 'react';
import { AvatarLetter } from '../avatarLetter/AvatarLetter';
import styles from './UserData.module.scss';

export const UserData = ({ userName, extraInfo }) => {
  return (
    <div className={styles.UserData}>
      <div className={styles.userName}>
        <AvatarLetter text={userName} />
        <div>
          <div>{userName}</div>
          <div className={styles.extraInfo}>{extraInfo}</div>
        </div>
      </div>
    </div>
  );
};
