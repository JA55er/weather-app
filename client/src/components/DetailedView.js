import React, { useEffect, useState } from "react";

import getCurrent from "../api/getCurrent";
import getDaily from "../api/getDaily";
import logAction from "../services/logAction";
import getDayOfTheWeek from "../services/getDayOfTheWeek";
import DailyWeather from "./DailyWeather";
import Grid from "@mui/material/Grid";
const DetailedView = ({ location, setDisplayDetails }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");

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
    }
  }, [currentWeather]);

  console.log(currentWeather);

  if (!currentWeather?.time || dailyWeather.length === 0)
    return <h1>Loading...</h1>;

  const icon = currentWeather?.symbol ? (
    <img
      src={`https://developer.foreca.com/static/images/symbols/${currentWeather.symbol}.png`}
      alt={`${currentWeather.symbolPhrase}`}
      height={"75px"}
    />
  ) : null;

  //refactor
  let dailyWeatherArray = null;
  if (dailyWeather.length !== 0) {
    dailyWeatherArray = dailyWeather.map((oneDayWeather, index) => {
      return <DailyWeather key={index} oneDayWeather={oneDayWeather} />;
    });
  } else {
    dailyWeatherArray = null;
  }

  const time = currentWeather.time.slice(11, 16);

  return (
    <div className="DetailedView">
      <div className="currentWeather">
        <div className="locationName">
          {location.name}, {location.country}
        </div>
        <div className="currentTime">
          {dayOfTheWeek} {time}
        </div>
        <div className="symbolPhrase">{currentWeather.symbolPhrase}</div>
        <div className="temperature" style={{ display: "flex" }}>
          {currentWeather.temperature}&#176; {icon}
        </div>
      </div>
      <Grid container direction="row" justifyContent="space-between" >
        {dailyWeatherArray}
      </Grid>
    </div>
  );
};

export default DetailedView;
