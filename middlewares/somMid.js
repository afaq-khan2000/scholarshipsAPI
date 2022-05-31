function somMid(req, res, next) {
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  next();
}

module.exports = somMid;
