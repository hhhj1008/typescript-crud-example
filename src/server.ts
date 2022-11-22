import http from "http";
import { createApp } from "./app";

require('dotenv').config();

const app = createApp();

const server = http.createServer(app);

const PORT = process.env.SERVER_POST;
server.listen(PORT, () => {
  console.log(`server start : http://localhost:${PORT}/`);
});
