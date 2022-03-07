var axios = require("axios").default;

const getCurrent = async (id) => {
  const response = await axios.get(`http://localhost:3001/api/weather/current?id=${id}`);
  console.log(response.data);
  return response.data;
};

export default getCurrent;
