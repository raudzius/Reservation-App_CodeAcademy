import React, { useContext, useRef } from 'react';
import MainContext from '../context/MainContext';
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
  const nav = useNavigate();
  const inputRef = useRef();

  const { setPlayerImage } = useContext(MainContext);

  const updatePhoto = () => {
    const photoValue = inputRef.current.value;
    if (photoValue.length > 0) {
      setPlayerImage(photoValue);
      nav('/game');
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="player image" />
      <button onClick={updatePhoto}>Add Image</button>
    </div>
  );
};

export default IndexPage;
