import React from 'react';
import styles from './Status.module.scss';

/**
 * @description
 * @param {string} status // Puede ser not_started, in_progress, finalized
 *
 */
export const Status = ({ status, text }) => {
  return (
    <div className={styles.Status}>
      <div className={`${styles.circle} ${status}`}></div>
      <span>{text}</span>
    </div>
  );
};
