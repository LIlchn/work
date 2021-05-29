const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || config.get("port");


app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/vacancies", require("./routes/vacancies"));
// app.use(require("./routes/record"));

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Started on ${PORT}`));
  } catch (error) {
    console.log("App start error", error);
    process.exit(1);
  }
}

start();


