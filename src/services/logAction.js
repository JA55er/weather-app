import axios from "axios";


//send an API call to the back-end server to log use actions
const logAction = async (data) => {

  let baseURL = ''
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3001/actions'
  } else {
    baseURL = 'https://api-dot-directed-beacon-342715.lm.r.appspot.com/actions'
  }
  try {
    await axios.post(baseURL, data);
  } catch (err) {
    console.error(err);
  }
};

export default logAction;
