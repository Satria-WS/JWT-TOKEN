import http from "http";
import app from "./app.js";

import { db } from "./config/database.js";



// config({ path: "../.env" });

const server = http.createServer(app);
const port = process.env.PORT || 3003;


// console.log(process.env.MONGO_URI);


// connect(MONGO_URI)
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
