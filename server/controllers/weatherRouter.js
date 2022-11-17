const weatherRouter = require("express").Router();
const axios = require('axios')
const config = require('../utils/config')

weatherRouter.get(`/location*`, async (req, res) => {

  // console.log(config.RAPIDAPI_KEY)

  // console.log(req.query)
  const options = {
    method: "GET",
    url: `https://foreca-weather.p.rapidapi.com/location/search/${req.query.location}`,
    params: { lang: "en" },
    headers: {
      "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
      "x-rapidapi-key": config.RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    // console.log('res data location list',response.data.locations.slice(0, 5))
    if (response.data.locations.length === 0) {
      res.send(["none"]);
      return
    }
    res.send(response.data.locations.slice(0, 5));
  } catch (err) {
    console.error(err);
  }
});

weatherRouter.get(`/current*`, async(req, res) => {
  var options = {
    method: "GET",
    url: `https://foreca-weather.p.rapidapi.com/current/${req.query.id}`,
    params: { tempunit: "C", windunit: "MS", lang: "en" },
    headers: {
      "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
      "x-rapidapi-key": config.RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data.current);
  } catch (err) {
    console.error(err);
  }
})

weatherRouter.get(`/daily*`, async (req, res) => {
  var options = {
    method: "GET",
    url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${req.query.id}`,
    params: {
      tempunit: "C",
      windunit: "MS",
      periods: "7",
      dataset: "full",
    },
    headers: {
      "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
      "x-rapidapi-key": config.RAPIDAPI_KEY,
    },
  };
  
  
    try {
      const response = await axios.request(options);
      res.send(response.data.forecast);
    } catch (err) {
      console.error(err);
    }
})

module.exports = weatherRouter;