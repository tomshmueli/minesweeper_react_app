import React from 'react';
import './GameOver.css'; // Import CSS file for styling

const GameOver = () => {
  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="game-over" onClick={restartGame}>
      <h1 className="game-over-title">GAME OVER</h1>
      <button className="restart-button">Restart</button>
    </div>
  );
};

export default GameOver;
