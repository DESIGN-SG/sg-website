import styles from "./SidebarNav.module.scss"

function SidebarNav() {
  return (
    <ul className={styles.SidebarNav}>
      <li><a href="/about">コンテンツ</a></li>
      <li><a href="">コンテンツ</a></li>
      <li><a href="">コンテンツ</a></li>
      <li><a href="">コンテンツ</a></li>
      <li><a href="">コンテンツ</a></li>
    </ul>
  );
}

export default SidebarNav;