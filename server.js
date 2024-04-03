const mongoose = require("mongoose");
const config = require("./config/config");
const { app, PORT } = require("./app");

mongoose
  .connect(config.mongodbUri, {
    serverSelectionTimeoutMS: config.serverTimeout,
  })
  .then(() => {
    console.log("Mongodb connected...");

    app.listen(PORT, () => {
      console.log(`Start listen on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("Error due mongodb connecting");
  });
