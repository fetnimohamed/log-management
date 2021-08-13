const logger = require("./logger");

logger.info("info");
logger.warn("warn");
logger.error("error");
logger.error(new Error("error with stack"));
logger.debug("debug");
