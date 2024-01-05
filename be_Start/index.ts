import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./dbConfig";
import company from "./router/companyRoute";
import staff from "./router/staffRouter";

const app: Application = express();
const port: number = 4488;

app.use(cors());
app.use(express.json());

app.use("/", company);
app.use("/", staff);

app.listen(port, () => {
  dbConfig();
});
