import axios from 'axios';

const logAction = async (data) => {
  console.log(data)
  await axios.post('http://localhost:3001', data)
};

export default logAction;