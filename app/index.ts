import { Application } from "./application";
import dotenv from "dotenv";

dotenv.config();

const radix = 10;
const application = new Application({
  port: parseInt(process.env.PORT, radix),
});

application.start();
