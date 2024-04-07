const express = require("express");
const path = require("path");
const createError = require("http-errors");
const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ extended: true }));

/*********Routes ****************** */
app.use("/", require("./routes/index"));
app.use("/", require("./routes/notifications"));
app.use("/", require("./routes/account"));
app.use("/", require("./routes/welcome"));
app.use("/", require("./routes/signup"));
app.use("/", require("./routes/signin"));

module.exports = { app, PORT };
