import { useState } from "react";
import SwitchLightDark from "../../SwitchLightDark";
import SidebarTitle from "../SidebarTitle";
import SidebarSns from "../SidebarSns";
import styles from './SidebarGrid.module.scss';

function SidebarGrid() {
  return (
    <aside className={styles.SidebarGrid}>
      <SidebarTitle />
      <SidebarSns />
      <div>く</div>
      <div>け</div>
    </aside>
  );
}

export default SidebarGrid;