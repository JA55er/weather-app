import axios from "axios";
import { baseURL } from "../utils/config";


//send an API call to the back-end server to log use actions
const logAction = async (data) => {
  console.log(data)
  try {
    await axios.post(`${baseURL}/actions`, data);
  } catch (err) {
    console.error(err);
  }
};

export default logAction;
