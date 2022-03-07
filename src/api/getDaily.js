var axios = require("axios").default;

const getDaily = async (id) => {
  const response = await axios.get(`http://localhost:3001/api/weather/daily?id=${id}`);
  return response.data;
};

export default getDaily;
