const app = require("express")();
const pino = require("pino-http")();
const logger = require("logger.js");
log.info("tt");
app.use(pino);

app.get("/", function (req, res) {
  req.log.info("something");
  res.send("hello world");
});
app.listen(3000);
