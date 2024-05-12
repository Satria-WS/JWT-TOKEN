import dbPool from "../config/db.js";

const userModel = {
  getAll: async () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users';
      dbPool.execute(query, (error, results, fields) => {
        if (error) {
          reject(new Error(`Error fetching users: ${error.message}`));
        } else {
          resolve(results);
        }
      });
    });
  },
  createUser: async (name,email,password) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users (name , email , address) VALUES (${name},${email},${password})`;
      dbPool.execute(query, (error, results, fields) => {
        if (error) {
          reject(new Error(`Error fetching users: ${error.message}`));
        } else {
          resolve(results);
        }
      });
    });
  },

};

export default userModel;
