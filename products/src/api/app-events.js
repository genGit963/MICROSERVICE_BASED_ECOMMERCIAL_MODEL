module.exports = (app) => {
  app.use("/app-events", (req, res, next) => {
    const { payload } = req.body;

    console.log("============ Product Service Recieved Event ===========");
    return res.status(200).json(payload);
  });
};
