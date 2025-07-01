import { useState, useEffect } from "react";
import styles from './SwitchLightDarkRectangle.module.scss';

function SwitchLightDarkRectangle() {
  const [colorMode, setColor] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = colorMode ? "#444" : "#f7f7f7";
    document.body.style.color = colorMode ? "#f7f7f7" : "#444";
    document.body.style.transition = "background .3s";
  }, [colorMode]);

  const toggleColor = () => {
    setColor(prev => !prev);
  };

  return (
    <>
      <label className={styles.toggle}>
        <input className={styles.toggle__input} type="checkbox" checked={colorMode} onChange={toggleColor} role="switch" />
        <span className={styles.toggle__slider}></span>
      </label>
    </>
  );
}

export default SwitchLightDarkRectangle;