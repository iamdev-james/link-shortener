const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const LinkRoute= require("./api/routes/link")

const app = express();


mongoose
  .connect('mongodb://localhost:27017/linkshort', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
   // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });



// set port, listen for requests
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});