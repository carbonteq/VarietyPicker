import { useMemo, useState } from "react";

const useDateLogic = () => {
  const [selectedDateObj, setSelectedDateObj] = useState<Date>(new Date());
  const [selectedDateString, setSelectedDateString] = useState<string>("");
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [isFutureOnly, setIsFutureOnly] = useState<boolean>(false);
  const [isPastOnly, setIsPastOnly] = useState<boolean>(false);

  useMemo(() => {
    1551;
    setSelectedDateString(selectedDateObj.toDateString());
  }, [selectedDateObj]);

  const setDate = (date: string | Date) => {
    typeof date === "string"
      ? setSelectedDateObj(new Date(date))
      : setSelectedDateObj(date);
  };

  const getAllDaysOfTheMonth = (setmonth: number, setyear: number) => {
    let tempDay: number = 1;

    const datesArray: Date[] = [];

    let currentDateinString: string = `${setmonth}/${tempDay}/${setyear}`;

    let tempDate = new Date(currentDateinString);

    while (`${tempDate}` !== `Invalid Date`) {
      datesArray.push(tempDate);
      tempDay++;
      currentDateinString = `${setmonth}/${tempDay}/${setyear}`;
      tempDate = new Date(currentDateinString);
    }

    return datesArray;
  };

  return {
    setDate,
    getAllDaysOfTheMonth,
    blockedDates,
    isFutureOnly,
    isPastOnly,
  };
};

export default useDateLogic;
