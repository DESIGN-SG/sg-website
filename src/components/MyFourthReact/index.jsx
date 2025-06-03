import { useState } from 'react';
import styles from './MyFourthReact.module.scss';

export default function MyFourthReact() {
  return <p className={styles.message}>こんにちは！</p>;
}

// {/* ノーマル */}
// <p className={styles.message}>こんにちは！</p>;

// {/* ハイフンが含まれる場合 */}
// <p className={styles['message-text']}>こんにちは！</p>;

// {/* 複数クラス */}
// <p className={`${styles.message} ${styles.large}`}>こんにちは！</p>;

// {/* 複数＋ハイフン含 */}
// <p className={`${styles.message} ${styles['message-text']}`}>こんにちは！</p>;

// {/* 状態変化（true/false）で動的に出し分ける */}
// export default function MyFourthReact() {
//   const [state, setState] = useState(true)
//   return (
//     <p className={state ? styles.noon : styles.night}>
//       {state ? "こんにちは！" : "こんばんは！"}
//     </p>
//   );
// }