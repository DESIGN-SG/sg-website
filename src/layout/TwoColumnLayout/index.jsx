import { useState } from "react";
import styles from './TwoColumnLayout.module.scss';

function TwoColumnLayout() {
  return (
    <div className={styles.twoColumnGrid}>
      <div>あいう</div>
      <div>えお</div>
    </div>
  );
}

export default TwoColumnLayout;