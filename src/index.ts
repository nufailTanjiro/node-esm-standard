import logger from "#/service/winston.service";
import { sum } from "#utils/sum.js";
import express from "express";

const port = process.env.PORT ?? 5001;
const app = express();

app.use((req, res, next) => {
  logger.info(
    `User Ip ${req.ip ?? "unknown"}, Request Path: ${req.originalUrl}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum", (req, res) => {
  const a = Number(req.query.a ?? 0);
  const b = Number(req.query.b ?? 0);
  const result = sum(a, b);
  res.send(`Sum of ${String(a)} and ${String(b)} is ${String(result)}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${String(port)}`);
});

process.on("SIGTERM", () => {
  console.log(`Process ${String(process.pid)} received SIGTERM`);
  process.exit(0);
});
