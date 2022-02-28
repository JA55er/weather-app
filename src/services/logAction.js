import axios from "axios";

//send an API call to the back-end server to log use actions
const logAction = async (data) => {
  try {
    await axios.post("http://localhost:3001", data);
  } catch (err) {
    console.error(err);
  }
};

export default logAction;
