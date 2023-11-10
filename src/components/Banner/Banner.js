import React from 'react';
import clsx from 'clsx';

import styles from './Banner.module.css';

function Banner({ won = false, howManyGuesses, answer, onReset }) {
  const winMessage = (<p>
    <strong>Congratulations!</strong> Got it in <strong>{howManyGuesses} guesses</strong></p>);

  const loseMessage = (<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>);

  return <div className={clsx(styles.banner, won ? styles.happy : styles.sad)}>
    {won ? winMessage : loseMessage}
    <button onClick={onReset}>Play again 🔄</button>
  </div>;
}

export default Banner;
