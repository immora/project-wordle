import React from 'react';

import styles from './PreviousGuesses.module.css';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function PreviousGuesses({ guesses = [], answer }) {
  return (
    <div className={styles.GuessResults}>
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess word={guesses[num]} answer={answer} key={index} />
      ))}
    </div>
  )
}

export default PreviousGuesses;
