import log4js, { Logger } from "log4js";

export type Log = Logger;

export function buildLogger(component: string): Log {
  const logger = log4js.getLogger(component);
  logger.level = "debug";
  logger.debug(`Logger created for component ${component}`);
  return logger;
}
