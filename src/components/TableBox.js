import React from 'react';

const TableBox = ({ index, box, boxSelected, setBoxSelected }) => {
  const selectedClass = index === boxSelected ? 'box selected' : 'box';

  return (
    <div
      className={selectedClass}
      style={{ backgroundColor: box }}
      onClick={() => setBoxSelected(index)}
    ></div>
  );
};

export default TableBox;
