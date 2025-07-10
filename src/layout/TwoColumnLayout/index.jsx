import { useState } from "react";
import SidebarGrid from "../../components/Sidebar/SidebarGrid";
import styles from './TwoColumnLayout.module.scss';

function TwoColumnLayout({ children }) {
  return (
    <div className={styles.twoColumnGrid}>
      <SidebarGrid />
      <main>{children}</main>
    </div>
  );
}

export default TwoColumnLayout;