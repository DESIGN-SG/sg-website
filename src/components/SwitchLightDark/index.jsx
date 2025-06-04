// SwitchLightDark.jsx
import { useState } from "react";
import styles from './SwitchLightDark.module.scss';

export default function SwitchLightDark() {
  const [check_state, setState] = useState(false);

  const handleChange = () => {
    setState(prev => !prev);
  };

  return (
    <>
      <input type="checkbox" checked={check_state} onChange={handleChange} />
      <p className={check_state ? styles.aaa : styles.bbb}>わーい</p>
      <p>現在の状態: {check_state ? 'ON' : 'OFF'}</p>
    </>
  );
}