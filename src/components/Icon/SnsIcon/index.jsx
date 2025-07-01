import styles from './SnsIcon.module.scss';

function SnsIcon({ linkUrl,iconImage }) {
  return (
    <div className={styles.IconWrap}>
      <a href={linkUrl} target="_blank">
        <img src={iconImage} alt="" />
      </a>
    </div>
  );
}

export default SnsIcon;