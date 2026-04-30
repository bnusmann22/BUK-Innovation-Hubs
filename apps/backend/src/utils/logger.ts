import winston from "winston";
import env from "../config/env";

const { combine, timestamp, colorize, printf, json } = winston.format;

// custom format for development
const devFormat = printf(({ level, message, timestamp, ...meta }) => {
  const metaStr = Object.keys(meta).length ? JSON.stringify(meta, null, 2) : "";
  return `[${timestamp}] ${level}: ${message} ${metaStr}`;
});

export const logger = winston.createLogger({
  level: env.NODE_ENV === "production" ? "warn" : "debug",
  transports: [
    // console output
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        env.NODE_ENV === "production" ? json() : devFormat,
      ),
    }),

    // error log file
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: combine(timestamp(), json()),
    }),

    // combined log file
    new winston.transports.File({
      filename: "logs/combined.log",
      format: combine(timestamp(), json()),
    }),
  ],
});
