import { useState } from "react";
import SidebarGrid from "../../components/Sidebar/SidebarGrid";
import styles from './TwoColumnLayout.module.scss';

function TwoColumnLayout() {
  return (
    <div className={styles.twoColumnGrid}>
      <SidebarGrid />
      <div></div>
    </div>
  );
}

export default TwoColumnLayout;