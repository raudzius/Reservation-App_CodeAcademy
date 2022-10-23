import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

const SingleBox = ({ box }) => {
  const classes = box ? 'box border' : 'box';

  const { playerPosition, playerImage } = useContext(MainContext);

  return (
    <div className={classes}>
      {playerPosition === box && <img className='playerImg' src={playerImage} alt="player avatar" />}
    </div>
  );
};

export default SingleBox;
