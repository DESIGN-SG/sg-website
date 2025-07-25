import styles from "./SidebarNav.module.scss"

function SidebarNav() {
  return (
    <ul className={styles.SidebarNav}>
      <li><a href="/about">コンテンツ<span></span></a></li>
      <li><a href="">コンテンツ<span></span></a></li>
      <li><a href="">コンテンツ<span></span></a></li>
      <li><a href="">コンテンツ<span></span></a></li>
      <li><a href="">コンテンツ<span></span></a></li>
    </ul>
  );
}

export default SidebarNav;