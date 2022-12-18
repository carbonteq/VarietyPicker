import React from "react";
import ReactDOM from "react-dom";
import DateButton from "./DateButton";

interface props {
  currentMonth: number;
  currentYear: number;
  dateArray: Date[];
  setDate: (date: string | Date) => void;
  changeMonth: any;
}

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateGrid: React.FC<props> = ({
  dateArray,
  setDate,
  currentMonth,
  currentYear,
  changeMonth,
}) => {
  return (
    <>
      <div className="calendar-picker-header">
        <div
          className="calendar-picker-button"
          onClick={() => {
            changeMonth(false);
          }}>
          {" "}
          {"<-"}{" "}
        </div>
        {Months[currentMonth]} {currentYear}
        <div
          className="calendar-picker-button"
          onClick={() => {
            changeMonth(true);
          }}>
          {" "}
          {"->"}{" "}
        </div>
      </div>
      <div className="calendar-div-flex">
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> Su </div>
          {dateArray.map((date) => {
            if (date.getDay() === 0) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> Mo </div>
          {dateArray.map((date) => {
            if (date.getDay() === 1) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> Tu </div>
          {dateArray.map((date) => {
            if (date.getDay() === 2) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> We </div>
          {dateArray.map((date) => {
            if (date.getDay() === 3) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> Th </div>
          {dateArray.map((date) => {
            if (date.getDay() === 4) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> Fr </div>
          {dateArray.map((date) => {
            if (date.getDay() === 5) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
        <div className="calendar-picker-date-column">
          <div className="calendar-picker-button"> Sat </div>
          {dateArray.map((date) => {
            if (date.getDay() === 6) {
              return (
                <DateButton
                  givenDate={date}
                  setDate={setDate}
                  key={Math.random()}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default DateGrid;
