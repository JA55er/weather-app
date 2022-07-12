const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require('./utils/config')

const app = express();
const weatherRouter = require('./controllers/weatherRouter')
app.use(express.json());
app.use(cors());

app.use('/api/weather', weatherRouter)

mongoose.connect(config.MONGODB_URI);


const actionSchema = new mongoose.Schema({
  action: String,
  date: Date,
  data: Object,
});

const Action = mongoose.model("Action", actionSchema);

//console logs user action and saves it in mongoDB
app.post("/actions", async (req, res) => {
  console.log(req.body);
  const action = new Action({
    action: req.body.action,
    data: req.body.data,
    date: new Date(),
  });
  try {
    response = await action.save();
    console.log(response);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
