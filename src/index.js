import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import DBConnect from "./db/index.js";

import express from "express";
const app = express();

dotenv.config({
  path: "./env",
});

DBConnect();

/*

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error :", error);
    throw error;
  }
})();

*/
