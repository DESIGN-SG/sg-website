import styles from './SidebarSns.module.scss';
import SnsIcon from '../../Icon/SnsIcon'

function SidebarSns() {
  return (
    <ul className={styles.SnsWrapper}>
      <li><SnsIcon linkUrl="https://x.com/DESIGN_SG_" iconImage="/icon/sns/sns_x.svg" /></li>
      <li><SnsIcon linkUrl="https://zenn.dev/design_sg" iconImage="/icon/sns/sns_zenn.svg" /></li>
      <li><SnsIcon linkUrl="https://github.com/DESIGN-SG" iconImage="/icon/sns/sns_github.svg" /></li>
    </ul>
  );
}

export default SidebarSns;