import React from 'react';
import clsx from 'clsx';
import styles from './Keyboard.module.css';

const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusForLetters(guesses) {
  const usedLetters = {};

  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      if (usedLetters[letter]?.status === 'correct') {
        return;
      }
      else if (usedLetters[letter]?.status === 'misplaced' && status !== 'correct') {
        return;
      }
      usedLetters[letter] = { status };
    });
  });

  return usedLetters;
}

function Keyboard({ validatedGuesses = [] }) {
  let lettersWithStatus = getStatusForLetters(validatedGuesses);

  return <div>
    {keyboard.map((row, rowIndex) => (
      <p className={styles.row} key={rowIndex}>
        {row.map((letter) => {
          return <span key={letter} className={clsx(styles.letter, styles[lettersWithStatus[letter]?.status ?? ''])}>{letter}</span>
        })}
      </p>
    ))}

  </div>;
}

export default Keyboard;
