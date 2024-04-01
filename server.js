const mongoose = require("mongoose");
const config = require("./config/config");

mongoose
  .connect(config.mongodbUri, {
    serverSelectionTimeoutMS: config.serverTimeout,
  })
  .then(() => {
    console.log("Mongodb connected...");
  })
  .catch((e) => {
    console.log("Error due mongodb connecting");
  });
