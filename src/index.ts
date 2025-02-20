import { sum } from "#utils/sum.js";
import express from "express";

const port = process.env.PORT ?? 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
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
