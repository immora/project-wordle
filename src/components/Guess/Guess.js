import React from 'react';

import styles from './Guess.module.css';
import { range } from '../../utils';
import clsx from 'clsx';
import { checkGuess } from '../../game-helpers';

function Guess({ word = '', answer }) {
  const wordStatus = checkGuess(word, answer) || [];

  return (
    <p className={styles.Guess}>
      {range(5).map((num) => (
        <span className={clsx(styles.Cell, styles[wordStatus[num]?.status] ?? "")} key={num}>{word[num]}</span>
      ))}
    </p>);
}

export default Guess;
