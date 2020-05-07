import express from "express";
import users from "../routes/users.route";

const server = express();

server.use(express.json());
server.use("/", users);

export default server;
