import { useState } from "react";
import SwitchLightDarkRectangle from "../../Button/SwitchLightDarkRectangle"
import SidebarTitle from "../SidebarTitle";
import SidebarSns from "../SidebarSns";
import SidebarNav from "../SidebarNav";
import styles from './SidebarGrid.module.scss';

function SidebarGrid() {
  return (
    <aside className={styles.SidebarGrid}>
      <SidebarTitle />
      <div className={styles.SnsAndSwitch}>
        <SidebarSns />
        <div><SwitchLightDarkRectangle /></div>
      </div>
      <nav><SidebarNav /></nav>
      <div></div>
    </aside>
  );
}

export default SidebarGrid;