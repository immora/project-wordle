import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ answer, onReset }) {
  return <Banner status="sad">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    <button onClick={onReset}>Play again 🔄</button>
  </Banner>;
}

export default LostBanner;
