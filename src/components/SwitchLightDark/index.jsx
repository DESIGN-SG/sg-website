import { useState, useEffect } from "react";
import styles from './SwitchLightDark.module.scss';

export default function SwitchLightDark() {
  const [check_state, setState] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = check_state ? "#444" : "#fff";
  }, [check_state]);

  const handleChange = () => {
    setState(prev => !prev);
  };

  return (
    <>
      <input type="checkbox" checked={check_state} onChange={handleChange} />
    </>
  );
}
