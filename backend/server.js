import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

app.listen(process.env.PORT || 4000, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
