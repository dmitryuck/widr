import React, { useState } from 'react';
import styles from './LoadingScreen.module.scss';


const LoadingIndicator = () => {
  const [activePointIndex, setActivePointIndex] = useState(0);

  setTimeout(() => {
    if (activePointIndex < 2) {
      setActivePointIndex(activePointIndex + 1);
    } else {
      setActivePointIndex(0);
    }
  }, 1000);

  return (
    <div className={styles.loadingIndicator}>
      <span className={activePointIndex === 0 ? styles.activeLoadingPoint : styles.loadingPoint}></span>
      <span className={activePointIndex === 1 ? styles.activeLoadingPoint : styles.loadingPoint}></span>
      <span className={activePointIndex === 2 ? styles.activeLoadingPoint : styles.loadingPoint}></span>
    </div>
  );
}

const LoadingPanel = () => {
  return (
    <div className={styles.loadingPanel}>
      <h2>Your Widr meeting is loading</h2>
      <LoadingIndicator />
    </div>
  );
}

export const LoadingScreen = () => {
  return (
    <section className={styles.loadingScreenContainer}>
      <img className={styles.logoImage} alt="find the right attorney" src="assets/img/logo.svg" />
      <LoadingPanel />
    </section>
  );
}
