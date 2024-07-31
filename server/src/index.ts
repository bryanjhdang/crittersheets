import express, { Request, Response, Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { characterRouter } from "./routes/characterRoutes";
import { inventoryRouter } from "./routes/inventoryRoutes";

dotenv.config();

const port = process.env.PORT || 8080;
const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send("It works!");
});

app.use("/character", characterRouter);
app.use("/inventory", inventoryRouter);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});