import mysql from "mysql2";

const dbPool = mysql.createPool({
  host: "localhost",
  user: 'root',
  password: "admin",
  database: "express_mysql"
});
//  const dbPromise = dbPool.promise();
export default dbPool;