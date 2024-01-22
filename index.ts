import dotenv from "dotenv";
import mongoose from "mongoose";

import app from "./app";

dotenv.config();
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL as string;

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(DB_URL);

  app.listen(PORT, () => {
    console.log(`Server running`);
  });
}
