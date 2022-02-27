var axios = require("axios").default;

const getLocation = async (location) => {
const options = {
  method: "GET",
  url: `https://foreca-weather.p.rapidapi.com/location/search/${location}`,
  params: { lang: "en" },
  headers: {
    "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
    "x-rapidapi-key": "f2f71f8924mshf7a00a61cf9acecp12d4c9jsne69198b50588",
  },
};

  try {
    const response = await axios.request(options);
    if (response.data.locations.length === 0) {
      return ["none"]
    }
    return response.data.locations.slice(0, 5);
  } catch (err) {
    console.error(err);
  }
};

export default getLocation;
