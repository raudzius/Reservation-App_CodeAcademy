import React from 'react';
import GameMap from '../components/GameMap';
import RollDice from '../components/RollDice';

const GamePage = () => {
  return (
    <div className="d-flex">
      <GameMap />
      <RollDice />
    </div>
  );
};

export default GamePage;
