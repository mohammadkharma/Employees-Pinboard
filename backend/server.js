const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

const pinsRouter = require("./routes/pins");
const employeesRouter = require("./routes/employees");

app.use("/pins", pinsRouter);
app.use("/employees", employeesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
