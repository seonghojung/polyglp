import { Pool, Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  user: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  host: process.env.DB_HOST_NAME,
  database: process.env.DB_DATABASE_NAME,
  port: process.env.DB_PORT,
});
client.connect((err) => {
  if (err) {
    console.error("Error on DB Connection:", err.stack);
  } else {
    console.log("Connected to DB");
  }
});

export default client;
