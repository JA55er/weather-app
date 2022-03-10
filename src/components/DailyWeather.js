import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import getDayOfTheWeek from "../services/getDayOfTheWeek";

const DailyWeather = ({ oneDayWeather }) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");

  //sets day of the week when API data is ready
  useEffect(() => {
    if (oneDayWeather?.date) {
      setDayOfTheWeek(getDayOfTheWeek(oneDayWeather.date));
    }
  }, [oneDayWeather]);

  return (
    <Grid item justifyContent="center" alignItems="center" flex>
      <div className="dailyItem" ok="yes">
        <div className="dailyNameOfDay">{dayOfTheWeek}</div>
        <div>
          L:{oneDayWeather.minTemp}&#176; H:{oneDayWeather.maxTemp}&#176;
        </div>
        <img
          src={`https://developer.foreca.com/static/images/symbols/${oneDayWeather.symbol}.png`}
          alt={`${oneDayWeather.symbolPhrase}`}
          height="75"
          className="dailyWeatherIcon"
        />
        <div>{oneDayWeather.symbolPhrase}</div>
      </div>
    </Grid>
  );
};

export default DailyWeather;
