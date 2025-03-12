/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import seedAdmin from "./app/admin";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    seedAdmin();

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })
  } catch (err: any) {
    throw new Error(err);
  }
}

main();
