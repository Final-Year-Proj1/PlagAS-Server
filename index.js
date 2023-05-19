const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
const plagRoute = require("./routes/plag");
const grammarRoute = require("./routes/grammar");
const cors = require("cors");

dotenv.config();

//Connect to DB
mongoose.connect(
  "mongodb+srv://admin:admin12345@cluster0.gx7ygwz.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Middlewares
app.use(express.json());

//CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/grammar", grammarRoute);
app.use("/api/plag", plagRoute);

app.listen(5000, () => console.log("Server up and running at PORT: " + 5000));
