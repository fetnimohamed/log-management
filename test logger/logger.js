const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, errors, json } = format;

// const myFormat = printf(({ level, message, label, timestamp, stack }) => {
//   return `${timestamp} ${level}: ${message || stack}`;
// });
const d = new Date();
const day = d.getDate();
const mounth = d.getMonth() + 1;
const year = d.getFullYear();

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), errors({ stack: true }), json()),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: `${day}-${mounth}-${year}.log`,
      level: "debug",
    }),
  ],
});
module.exports = logger;
