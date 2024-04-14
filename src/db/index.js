import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error : ", error);
    process.exit(1);
  }
};

export default DBConnect;
