import { useState } from "react";

export default function MyThirdReact ({ buttonLabel, messageText}) {
const [text, setMessage] = useState('');

  return (
    <>
      <p>{text}</p>
      <input
      type="button"
      value={buttonLabel}
      onClick={() => setMessage(messageText)}
      />
    </>
  ); 
}