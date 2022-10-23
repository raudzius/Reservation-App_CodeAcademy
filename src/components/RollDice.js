import React, { useContext, useState } from 'react';
import SingleDice from './SingleDice';
import MainContext from '../context/MainContext';

const RollDice = () => {
  const { playerPosition, setPlayerPosition } = useContext(MainContext);

  const [nums, setNums] = useState([1, 1]);

  const updatePlayerPosition = (diceSum) => {
    if (playerPosition + diceSum > 28) {
      setPlayerPosition(playerPosition + diceSum - 28);
    } else {
      setPlayerPosition(playerPosition + diceSum);
    }
  };

  const rollDice = () => {
    const rnd = () => Math.floor(Math.random() * 6) + 1;
    const result = [rnd(), rnd()];
    setNums(result);
    updatePlayerPosition(result[0] + result[1]);
  };

  return (
    <div className="pl-20">
      <div className="d-flex">
        <SingleDice num={nums[0]} />
        <SingleDice num={nums[1]} />
      </div>
      <button onClick={rollDice}>Roll Die</button>
    </div>
  );
};

export default RollDice;
