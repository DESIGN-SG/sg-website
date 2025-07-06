import { useState, useEffect } from "react";
import styles from './SwitchLightDarkRectangle.module.scss';

function SwitchLightDarkRectangle() {
  const [colorMode, setColor] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", colorMode);
    document.body.style.transition = "background 0.3s";
  }, [colorMode]);

  const toggleColor = () => {
    setColor(prev => !prev);
  };

  return (
    <label className={styles.toggle}>
      <input
        className={styles.toggle__input}
        type="checkbox"
        checked={colorMode}
        onChange={toggleColor}
        role="switch"
      />
      <span className={styles.toggle__slider}></span>
    </label>
  );
}

export default SwitchLightDarkRectangle;