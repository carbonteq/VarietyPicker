import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import useDateLogic from "./hooks/useDateLogic";
import DateGrid from "./components/CalendarPicker/DateGrid";
import CalendarPickerContainer from "./container/CalendarPicker/CalendarPickerContainer";
//initialize repo
const App: React.FC = () => {
  return (
    <>
      <CalendarPickerContainer />
    </>
  );
};

export default App;
