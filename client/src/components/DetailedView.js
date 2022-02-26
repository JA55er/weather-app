import React, { useEffect, useState } from "react";

import getCurrent from "../api/getCurrent";
import getDaily from "../api/getDaily";
import logAction from "../services/logAction";
import getDayOfTheWeek from "../services/getDayOfTheWeek";
import DailyWeather from "./DailyWeather";
const DetailedView = ({ location, setDisplayDetails }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState('')

  useEffect(() => {
    const getCurrentWeather = async () => {
      setCurrentWeather(await getCurrent(location.id));
      setDailyWeather(await getDaily(location.id));
    };
    getCurrentWeather();
  }, [location.id]);

  useEffect(() => {
    if (currentWeather?.time) {
      logAction({
        action: "retrieved current weather",
        data: {
          name: location.name,
          country: location.country,
          currentWeather,
        },
      });
      setDayOfTheWeek(getDayOfTheWeek(currentWeather.time));
      console.log(location);
    }
  }, [currentWeather]);

  console.log(currentWeather)


  const icon = currentWeather?.symbol ? (
    <img
      src={`https://developer.foreca.com/static/images/symbols/${currentWeather.symbol}.png`}
      alt={`${currentWeather.symbolPhrase}`}
    />
  ) : null;

  let dailyWeatherArray = null;
  if (dailyWeather.length !== 0) {
    dailyWeatherArray = dailyWeather.map((oneDayWeather, index) => {
      return <DailyWeather key={index} oneDayWeather={oneDayWeather} />;
    });
  } else {
    dailyWeatherArray = null;
  }

  console.log(dayOfTheWeek)

  return (
    <div>
      <div onClick={() => setDisplayDetails(null)}>
        {location.name} {location.country}
      </div>
      <div>{dayOfTheWeek}</div>
      {icon}
      {dailyWeatherArray}
    </div>
  );
};

export default DetailedView;
