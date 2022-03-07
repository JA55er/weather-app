var axios = require("axios").default;

const getLocation = async (location) => {
  const response = await axios.get(`http://localhost:3001/api/weather/location?location=${location}`);
  return response.data;
};

export default getLocation;
