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

// import { useState } from "react";

// export default function MyThirdReact (props) {
// const [text, setMessage] = useState('');

//   return (
//     <>
//       <p>{text}</p>
//       <input
//       type="button"
//       value={props.buttonLabel}
//       onClick={() => setMessage(props.messageText)}
//       />
//     </>
//   ); 
// }