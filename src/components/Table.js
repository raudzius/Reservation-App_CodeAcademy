import React from 'react';
import TableBox from './TableBox';

const Table = ({ boxes, setBoxSelected, boxSelected }) => {
  return (
    <div className="d-flex table flex-wrap">
      {boxes.map((box, index) => (
        <TableBox
          key={index}
          index={index}
          box={box}
          boxSelected={boxSelected}
          setBoxSelected={setBoxSelected}
        ></TableBox>
      ))}
    </div>
  );
};

export default Table;
