import styles from "./SidebarNav.module.scss"

function SidebarNav() {
  return (
    <ul className={styles.SidebarNav}>
      <li><a href="">かきく</a></li>
      <li><a href="">あ</a></li>
      <li><a href="">い</a></li>
      <li><a href="">う</a></li>
      <li><a href="">えお</a></li>
    </ul>
  );
}

export default SidebarNav;