import { useState } from "react";
import SidebarGrid from "../../components/Sidebar/SidebarGrid";
import styles from './TwoColumnLayout.module.scss';

function TwoColumnLayout() {
  return (
    <div className={styles.twoColumnGrid}>
      <SidebarGrid />
      <main>あああああああ</main>
    </div>
  );
}

export default TwoColumnLayout;