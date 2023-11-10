import React from 'react';

import styles from './Game.module.css';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);

  console.info({ answer });

  function handleSubmit(event) {
    event.preventDefault();

    setGuess('');
    setGuesses([...guesses, guess]);

    if (guess.toUpperCase() === answer) {
      setWon(true);
    }
  }

  const handleReset = () => {
    setAnswer(sample(WORDS));
    setGuess('');
    setGuesses([]);
    setWon(false);
  }

  const isGameFinished = won || guesses.length === NUM_OF_GUESSES_ALLOWED;

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return <>
    <PreviousGuesses guesses={guesses} answer={answer} />

    <form className={styles.guessInputWrapper} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} pattern="^.{5}$" disabled={isGameFinished} />
    </ form>

    <Keyboard validatedGuesses={validatedGuesses} />

    {isGameFinished && <Banner won={won} howManyGuesses={guesses.length} answer={answer} onReset={handleReset} />}
  </>;
}

export default Game;
