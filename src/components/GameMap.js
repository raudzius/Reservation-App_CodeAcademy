import React, { useContext } from 'react';
import MainContext from '../context/MainContext';
import SingleBox from './SingleBox';

const GameMap = () => {
  const { gameMap } = useContext(MainContext);

  return (
    <div className="gameMap">
      {gameMap.map((box, index) => (
        <SingleBox key={index} box={box} />
      ))}
    </div>
  );
};

export default GameMap;
