import { useState, useEffect } from "react";
import styles from './SwitchLightDark.module.scss';

function SwitchLightDark() {
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
      <input type="checkbox" checked={colorMode} onChange={toggleColor} />
    </>
  );
}

export default SwitchLightDark;