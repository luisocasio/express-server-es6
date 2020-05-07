import server from "./api/server";
import dotenv from "dotenv";

const ENV = dotenv.config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`\nThis server is breathing on :${PORT}.\n`);
});
