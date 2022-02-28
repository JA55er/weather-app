const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Tautvydas:ELO7gsQb3uBHB7Mz@cluster0.qb93a.mongodb.net/UserActions?retryWrites=true&w=majority")

const actionSchema = new mongoose.Schema({
  action: String,
  date: Date,
  data: Object
})

const Action = mongoose.model('Action', actionSchema);

//console logs user action and saves it in mongoDB
app.post("/", async (req, res) => {
  console.log(req.body);
  const action = new Action({
    action: req.body.action,
    data: req.body.data,
    date: new Date()
  })
  try {
    response = await action.save()
    console.log(response)
  } catch (err) {
    console.log(err)
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
