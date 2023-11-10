import React from 'react';

import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);

  console.info({ answer });

  function handleGuessSubmit(guess) {
    setGuesses([...guesses, guess]);

    if (guess.toUpperCase() === answer) {
      setWon(true);
    }
  }

  const handleReset = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setWon(false);
  }

  const isGameFinished = won || guesses.length === NUM_OF_GUESSES_ALLOWED;

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return <>
    <PreviousGuesses guesses={guesses} answer={answer} />

    <GuessInput handleGuessSubmit={handleGuessSubmit} isGameFinished={isGameFinished} />

    <Keyboard validatedGuesses={validatedGuesses} />

    {isGameFinished && won && <WonBanner howManyGuesses={guesses.length} />}

    {isGameFinished && !won && <LostBanner answer={answer} onReset={handleReset} />}
  </>;
}

export default Game;
