import React, { useEffect, useState } from "react";
import getDayOfTheWeek from "../services/getDayOfTheWeek";

const DailyWeather = ({ oneDayWeather }) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState('')

  useEffect(() => {
    if(oneDayWeather?.date) {
      setDayOfTheWeek(getDayOfTheWeek(oneDayWeather.date))
    }
  }, [oneDayWeather])
  console.log(oneDayWeather);
  console.log(dayOfTheWeek)
  return (
    <div>
      <img
        src={`https://developer.foreca.com/static/images/symbols/${oneDayWeather.symbol}.png`}
        alt={`${oneDayWeather.symbolPhrase}`}
      />
    </div>
  );
};

export default DailyWeather;
