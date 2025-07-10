import styles from './SnsIcon.module.scss';

function SnsIcon({ linkUrl, iconImage, imgAlt, anchorId }) {
  return (
    <a href={linkUrl} target="_blank" className={styles.IconWrap}>
      <span style={{ anchorName: anchorId }}>
        <img src={iconImage} alt={imgAlt} loading="eager" />
      </span>
    </a>
  );
}

export default SnsIcon;