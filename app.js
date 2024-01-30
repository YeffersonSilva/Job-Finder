const express = require("express");
const app = express();
const db = require("./db/connection");
const bodyParser = require("body-parser");



const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});
//body parser
app.use(bodyParser.urlencoded({extended: false}))




//db connetion
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })

  .catch((err) => {
    console.log("Error: " + err);
  });

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the applicati1on.");
});


//jobs routes
app.use("/jobs", require("./routes/jobs"));