import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conet = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conet.connection.host}`.bgMagenta
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed);
  }
};

export default connectDB;
