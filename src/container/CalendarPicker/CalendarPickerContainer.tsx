import React, { useEffect, useMemo, useState } from "react";
import DateGrid from "../../components/CalendarPicker/DateGrid";
import useDateLogic from "../../hooks/useDateLogic";

const CalendarPickerContainer: React.FC = () => {
  const { setDate, getAllDaysOfTheMonth } = useDateLogic();

  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [dateArray, setDateArray] = useState<Date[]>([]);

  const getExtraDays = (
    currentDate: Date,
    numDays: number,
    when: "BEFORE" | "AFTER"
  ) => {
    const milisecondConversionFactor =
      when === "BEFORE" ? -1 * 60 * 60 * 1000 * 24 : 60 * 60 * 1000 * 24;
    const tempArray = [];

    for (let i = 1; i <= numDays; i++) {
      tempArray.push(
        new Date(currentDate.getTime() + i * milisecondConversionFactor)
      );
    }

    return tempArray;
  };

  const changeMonth = (isFuture: boolean) => {
    isFuture
      ? setCurrentMonth((month) => {
          if (month !== 11) {
            return month + 1;
          } else {
            setCurrentYear((year) => {
              return year + 1;
            });
            return 0;
          }
        })
      : setCurrentMonth((month) => {
          if (month !== 0) {
            return month - 1;
          } else {
            setCurrentYear((year) => {
              return year - 1;
            });
            return 11;
          }
        });
  };

  //   useEffect(() => {
  //     const MonthDates = getAllDaysOfTheMonth(currentMonth + 1, currentYear);
  //     const beforeDates = getExtraDays(
  //       MonthDates[0],
  //       MonthDates[0]?.getDay(),
  //       "BEFORE"
  //     );

  //     const tempDates = [...beforeDates, ...MonthDates];
  //     const futureDates = getExtraDays(
  //       tempDates[tempDates.length - 1],
  //       35 - tempDates.length,
  //       "AFTER"
  //     );
  //     setDateArray([...beforeDates, ...MonthDates, ...futureDates]);
  //     console.log([...beforeDates, ...MonthDates, ...futureDates]);
  //   }, []);

  useMemo(() => {
    const tempDates = getAllDaysOfTheMonth(currentMonth + 1, currentYear);
    const beforeDates = getExtraDays(
      tempDates[0],
      tempDates[0]?.getDay(),
      "BEFORE"
    );
    const futureDates = getExtraDays(
      tempDates[tempDates.length - 1],
      35 - tempDates.length,
      "AFTER"
    );
    setDateArray([...beforeDates, ...tempDates, ...futureDates]);
    console.log([...beforeDates, ...tempDates]);

    console.log(currentYear);
  }, [currentMonth, currentYear]);

  return (
    <>
      <DateGrid
        dateArray={dateArray}
        setDate={setDate}
        currentMonth={currentMonth}
        currentYear={currentYear}
        changeMonth={changeMonth}
      />
    </>
  );
};

export default CalendarPickerContainer;
