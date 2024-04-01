const express = require("express");
const path = require("path");
const createError = require("http-errors");
const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Start listen on port ${PORT}`);
});
