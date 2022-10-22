import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Sidebar from './components/Sidebar';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxSelected, setBoxSelected] = useState(0);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(null);
    }

    setBoxes(arr);
  }, []);

  const reserve = (color) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[boxSelected] = color;
    setBoxes(updatedBoxes);
  };
  const cancelReservation = () => {
    const updatedBoxes = [...boxes];
    updatedBoxes[boxSelected] = null;
    setBoxes(updatedBoxes);
  };

  return (
    <div className="App d-flex">
      <Table boxes={boxes} setBoxSelected={setBoxSelected} boxSelected={boxSelected} />
      <Sidebar
        reserve={reserve}
        cancelReservation={cancelReservation}
        reservationStatus={boxes[boxSelected]}
      />
    </div>
  );
}

export default App;
