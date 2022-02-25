import React from "react";

const DailyWeather = ({ oneDayWeather }) => {
  // console.log(oneDayWeather);
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
