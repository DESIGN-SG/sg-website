import { useState } from "react";
import styles from './SwitchLightDark.module.scss';

export default function SwitchLightDark() {
  const [check_state, setState] = useState(false);
  const handleChange = () => {
    setState(prev => !prev);
    if (check_state === true) {
      body.setAttribute("style", "background-color: #444;")
    }else {
      body.setAttribute("style", "background-color: #fff;")
    }
  };

  return (
    <>
      <input type="checkbox" checked={check_state} onChange={handleChange} />
    </>
  );
}