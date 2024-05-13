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
  createUser: async (name,email,address) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (name, email, address) VALUES (?, ?, ?)';
       dbPool.execute(query, [name, email, address], (error, results, fields) => {
        if (error) {
          reject(new Error(`Error fetching users: ${error.message}`));
        } else {
          const insertId = results.insertId;
          const query =  'SELECT * FROM users WHERE id = ?'
          dbPool.execute(query, [insertId], (error, results, fields) => {
            if (error) {
                reject(new Error(`Error fetching inserted user: ${error.message}`));
            } else {
                resolve(results[0]); // Return the first (and only) row of the result set
            }
        });
          // resolve(results);
        }
      });
    });
  },

};

export default userModel;
