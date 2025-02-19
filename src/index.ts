import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with ESM & TypeScript!");
});

app.get("/sum", (req: Request, res: Response) => {
  const { a, b } = req.query;
  const sum = Number(a) + Number(b);
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
