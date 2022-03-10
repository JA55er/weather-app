import axios from "axios";
import { baseURL } from "../utils/config";

const getCurrent = async (id) => {
  const response = await axios.get(`${baseURL}/api/weather/current?id=${id}`);
  return response.data;
};

export default getCurrent;
