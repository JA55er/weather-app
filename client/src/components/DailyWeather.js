import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import getDayOfTheWeek from "../services/getDayOfTheWeek";

const DailyWeather = ({ oneDayWeather }) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");

  useEffect(() => {
    if (oneDayWeather?.date) {
      setDayOfTheWeek(getDayOfTheWeek(oneDayWeather.date));
      console.log(oneDayWeather);
    }
  }, [oneDayWeather]);
  return (
    <Grid item xs={1} justifyContent="center" alignItems="center" flex>
      <Paper>
        <div className="dailyItem">
          <div className="dailyNameOfDay">{dayOfTheWeek}</div>
          <div>
            H:{oneDayWeather.minTemp}&#176; L:{oneDayWeather.maxTemp}&#176;
          </div>
          <img
            src={`https://developer.foreca.com/static/images/symbols/${oneDayWeather.symbol}.png`}
            alt={`${oneDayWeather.symbolPhrase}`}
            height="75"
          />
          <div>{oneDayWeather.symbolPhrase}</div>
        </div>
      </Paper>
    </Grid>
  );
};

export default DailyWeather;
