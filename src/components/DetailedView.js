import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import getCurrent from "../api/getCurrent";
import getDaily from "../api/getDaily";
import logAction from "../services/logAction";
import getDayOfTheWeek from "../services/getDayOfTheWeek";
import DailyWeather from "./DailyWeather";

const DetailedView = ({ location }) => {
  //currentWeather - current weather retreived from API
  //dailyWeather - array with 7 days weather info from API
  //dayOfTheWeek - name of the day to display
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");

  //gets current weather and info for 7 days from the API whenever a new location is selected
  useEffect(() => {
    const getCurrentWeather = async () => {
      setCurrentWeather(await getCurrent(location.id));
      setDailyWeather(await getDaily(location.id));
    };
    getCurrentWeather();
  }, [location.id]);

  //send an action log to the back-end server when current weather data gets retreived from an API call
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

  //display loading while data from the API calls is getting fetched
  if (!currentWeather?.time || dailyWeather.length === 0)
    return <h1>Loading...</h1>;

  //waits for the icon to be ready
  const icon = currentWeather?.symbol ? (
    <img
      src={`https://developer.foreca.com/static/images/symbols/${currentWeather.symbol}.png`}
      alt={`${currentWeather.symbolPhrase}`}
      height={"75px"}
    />
  ) : null;

  //displays a list of daily weather components
  const dailyWeatherArray = dailyWeather.map((oneDayWeather, index) => {
    return <DailyWeather key={index} oneDayWeather={oneDayWeather} />;
  });

  //displays hours and minutes
  const time = currentWeather.time.slice(11, 16);

  return (
    <div className="detailedView">
      <Paper>
        <div className="detailedViewContainer">
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
          <Grid container direction="row" justifyContent="space-evenly">
            {dailyWeatherArray}
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default DetailedView;
