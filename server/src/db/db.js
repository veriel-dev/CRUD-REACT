import mongoose from "mongoose";
import { colors } from "../config.js";
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`${colors.fgRed}Database connected: `, process.env.MONGO_URI + `${colors.resetColor}`)
  } catch (error) {
    console.log(error);
    throw new Error(`${colors.fgRed}Error connecting to database${colors.resetColor}`);
  }
}

export { dbConnect }
