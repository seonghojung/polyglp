import fs from "fs";
import https from "https";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

const { PORT } = process.env;
const options = {
  key: fs.readFileSync("./localhost+1-key.pem"),
  cert: fs.readFileSync("./localhost+1.pem"),
};

const server = https.createServer(options, app);
server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
