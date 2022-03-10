import { baseURL } from "../utils/config";
import axios from "axios";

const getDaily = async (id) => {
  const response = await axios.get(`${baseURL}/api/weather/daily?id=${id}`);
  return response.data;
};

export default getDaily;
