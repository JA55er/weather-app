import { baseURL } from "../utils/config";
import axios from "axios";

const getLocation = async (location) => {
  const response = await axios.get(`${baseURL}/api/weather/location?location=${location}`);
  return response.data;
};

export default getLocation;
