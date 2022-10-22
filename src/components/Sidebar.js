import React, { useRef } from 'react';

const Sidebar = ({ reserve, cancelReservation, reservationStatus }) => {
  const colorRef = useRef();

  return (
    <div className="sidebar">
      {reservationStatus ? (
        <div className="d-flex flex-column">
          <button onClick={cancelReservation}>Cancel Reservation</button>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <input ref={colorRef} type="color" />
          <button onClick={() => reserve(colorRef.current.value)}>Make Reservation</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
