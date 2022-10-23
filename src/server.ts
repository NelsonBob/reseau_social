import { App } from "./app";
import { config } from "dotenv";

export const main = async () => {
  config();

  const app = new App();
  await app.listen(process.env.PORT || "3000");
};
