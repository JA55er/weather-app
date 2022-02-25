import React, { useEffect, useState } from "react";

import getCurrent from "../api/getCurrent";
import getDaily from "../api/getDaily";
import logAction from "../services/logAction";
import DailyWeather from "./DailyWeather";
const DetailedView = ({ location, setDisplayDetails }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);

  useEffect(() => {
    const getCurrentWeather = async () => {
      setCurrentWeather(await getCurrent(location.id));
      setDailyWeather(await getDaily(location.id));
    };
    getCurrentWeather();
  }, [location.id]);

  useEffect(() => {
    if (currentWeather.time) {
      logAction({
        action: "retrieved current weather",
        data: {
          name: location.name,
          country: location.country,
          currentWeather,
        },
      });
      console.log(location);
    }
  }, [currentWeather]);

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

  return (
    <div>
      <div onClick={() => setDisplayDetails(null)}>
        {location.name} {location.country}
      </div>
      {icon}
      {dailyWeatherArray}
    </div>
  );
};

export default DetailedView;
