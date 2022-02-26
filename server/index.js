const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");


const app = express();
mongoose.connect("mongodb+srv://Tautvydas:HmljRZo7OjuG4dMN@cluster0.smf5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const actionSchema = new mongoose.Schema({
  action: String,
  date: Date,
  data: Object
})

const Action = mongoose.model('Action', actionSchema);

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  console.log(req.body);
  const action = new Action({
    action: req.body.action,
    data: req.body.data,
    date: new Date()
  })
  response = await action.save()
  // console.log(response)
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

console.log("hello world");
