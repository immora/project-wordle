import React from 'react';

import styles from './GuessInput.module.css';

function GuessInput({ handleGuessSubmit, isGameFinished }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setGuess('');
    handleGuessSubmit(guess);
  }

  return (
    <form className={styles.guessInputWrapper} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} pattern="[a-zA-Z]{5}" title="5-letter Word" disabled={isGameFinished} />
    </ form>
  );
}

export default GuessInput;
