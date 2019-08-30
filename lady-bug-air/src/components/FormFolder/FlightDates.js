import React from "react";

const dateNow = () => {
  const str = new Date().toISOString();
  return str.substring(0, str.indexOf("T"));
};

const FlightDates = ({dateFrom, dateTo, dateFromHandler, dateToHandler}) => {

  return (
    <>
      <input name="start" type="date" min={dateNow()} onChange={dateFromHandler} value={dateFrom}></input>
      <input name="return" type="date" min={dateFrom} onChange={dateToHandler} value={dateTo}></input>
    </>
  );
};
export default FlightDates;
