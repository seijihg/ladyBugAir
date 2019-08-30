import React from "react";

const dateNow = () => {
  const str = new Date().toISOString();
  return str.substring(0, str.indexOf("T"));
};

const FlightDates = (props) => {

  return (
    <>
      <input name="start" type="date" min={dateNow()} onChange={null} value={null}></input>
      <input name="return" type="date" min={null} onChange={null} value={null}></input>
    </>
  );
};
export default FlightDates;
