import React, { useState } from 'react';

const SingleDice = ({ num }) => {
  let coordinates = '';

  if (num === 1) coordinates = '-5px -5px';
  if (num === 2) coordinates = '-125px -5px';
  if (num === 3) coordinates = '-245px -5px';
  if (num === 4) coordinates = '-5px -125px';
  if (num === 5) coordinates = '-125px -125px';
  if (num === 6) coordinates = '-245px -125px';

  return <div style={{ backgroundPosition: coordinates }} className="dice"></div>;
};

export default SingleDice;
