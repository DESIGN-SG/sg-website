import { useState } from "react";
import SwitchLightDarkRectangle from "../../Button/SwitchLightDarkRectangle"
import SidebarTitle from "../SidebarTitle";
import SidebarSns from "../SidebarSns";
import styles from './SidebarGrid.module.scss';

function SidebarGrid() {
  return (
    <aside className={styles.SidebarGrid}>
      <SidebarTitle />
      <div className={styles.SnsAndSwitch}><SidebarSns /><div></div></div>
      <div><SwitchLightDarkRectangle /></div>
      <div>け</div>
    </aside>
  );
}

export default SidebarGrid;