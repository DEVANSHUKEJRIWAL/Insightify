import React from 'react';
import styles from './pagination.module.css';

const Pagination = () => {
  const isDisabled = true;
  return (
    <div className={styles.container}>
      <div className={`${styles.button} ${isDisabled ? styles.disabled :''}`} disabled>Previous</div>
      <div className={styles.button}>Next</div>
    </div>
  );
}

export default Pagination;
