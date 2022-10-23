import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import GamePage from './pages/GamePage';
import MainContext from './context/MainContext';

const gameMap = [
  1, 2, 3, 4, 5, 6, 7, 8, 28, 0, 0, 0, 0, 0, 0, 9, 27, 0, 0, 0, 0, 0, 0, 10, 26, 0, 0, 0, 0, 0, 0,
  11, 25, 0, 0, 0, 0, 0, 0, 12, 24, 0, 0, 0, 0, 0, 0, 13, 23, 0, 0, 0, 0, 0, 0, 14, 22, 21, 20, 19,
  18, 17, 16, 15,
];

const App = () => {
  const [playerPosition, setPlayerPosition] = useState(1);
  const [playerImage, setPlayerImage] = useState('');

  const contextValue = { gameMap, playerImage, playerPosition, setPlayerImage, setPlayerPosition };

  return (
    <MainContext.Provider value={contextValue}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MainContext.Provider>
  );
};

export default App;
