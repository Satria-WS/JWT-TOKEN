import mongoose from "mongoose";
import { config } from "dotenv";

config();


const MONGO_URI = process.env.MONGO_URI;



try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.on("connected", () => {
    console.log("Koneksi ke MongoDB berhasil");
  });
  
  mongoose.connection.on("error", (err) => {
    console.error("Koneksi MongoDB gagal: " + err);
  });
} catch (error) {
  console.log(error);
}



export const db = mongoose.connection;