import { useState } from 'react';
import './MyFirstReact.css';

export default function MyFirstReact() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <hgroup>
        <h1 className="title">Hello World!</h1>
        <p className="subtitle">{message}</p>
      </hgroup>
      <input
        type="button"
        value="build from..."
        onClick={() => setMessage('Astro + React')}
      />
    </div>
  );
}
