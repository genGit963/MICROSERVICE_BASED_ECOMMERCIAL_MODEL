const express = require("express");
const { PORT } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");

const StartServer = async () => {
  const app = express();

  await databaseConnection();

  await expressApp(app);

  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "This customer MS !!" });
  });

  app
    .listen(PORT, () => {
      console.log(`Customers: listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
