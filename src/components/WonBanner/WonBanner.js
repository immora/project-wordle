import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ howManyGuesses }) {
  return <Banner status="happy">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{howManyGuesses} guesses</strong></p>
  </Banner>;
}

export default WonBanner;
