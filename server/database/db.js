import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USENAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  mongoose.set('strictQuery', false);
  const MONGODB_URL =
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.yi5v2nl.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("database connected sucessfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database", error.message);
  });
};

export default Connection;
