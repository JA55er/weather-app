var axios = require("axios").default;

const getDaily = async (id) => {
var options = {
  method: "GET",
  url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}`,
  params: {
    tempunit: "C",
    windunit: "MS",
    periods: "7",
    dataset: "full",
  },
  headers: {
    "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
    "x-rapidapi-key": "f2f71f8924mshf7a00a61cf9acecp12d4c9jsne69198b50588",
  },
};


  try {
    const response = await axios.request(options);
    return response.data.forecast;
  } catch (err) {
    console.error(err);
  }
};

export default getDaily;
