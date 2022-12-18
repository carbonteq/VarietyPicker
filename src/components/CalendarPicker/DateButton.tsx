import React from "react";
import ReactDOM from "react-dom";

interface props {
  givenDate: Date;
  setDate: (date: string | Date) => void;
}

const DateButton: React.FC<props> = ({ givenDate, setDate }) => {
  return (
    <div
      className="calendar-picker-button"
      onClick={() => {
        setDate(givenDate);
      }}>
      {givenDate.getDate()}
    </div>
  );
};

export default DateButton;
