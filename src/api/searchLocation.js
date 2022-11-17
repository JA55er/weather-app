import { baseURL } from "../utils/config";
import axios from "axios";

const getLocation = async (location) => {
  console.log(location)
  const response = await axios.get(`${baseURL}/api/weather/location?location=${location}`);
  console.log(response.data)
  return response.data;
};

export default getLocation;
