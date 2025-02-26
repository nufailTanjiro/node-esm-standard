import { __dirname } from "#/utils/getDirname";
import path from "path";
import winston, { format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logDirPath = process.env.LOG_DIR ?? path.join(__dirname, "../logs");

const { colorize, combine, json, simple, timestamp } = format;

const logger = winston.createLogger({
  defaultMeta: { service: "esm-standard" },
  format: combine(timestamp(), json()),
  level: "info",
  transports: [
    new winston.transports.File({
      filename: `${logDirPath}/error.log`,
      level: "error",
    }),
    new DailyRotateFile({
      datePattern: "YYYY-MM-DD",
      filename: `${logDirPath}/cleanId-log-%DATE%.log`,

      maxFiles: "14d",
      maxSize: "20m",

      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), simple()),
    })
  );
}

export default logger;
