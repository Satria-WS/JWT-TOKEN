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
  getById: async (id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE id = ?';
      dbPool.execute(query, [id], (error, results, fields) => {
        if (error) {
          reject(new Error(`Error fetching users: ${error.message}`));
        } else {
          resolve(results);
        }
      })
    })
  }
  ,
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
  updateUser: async (id , name,email, address) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?';
      dbPool.execute(query,[name , email , address, id], (error, results, fields) => {
        if (error) {
          reject(new Error(`Error fetching users: ${error.message}`));
        } else {
          const query = 'SELECT * FROM users WHERE id = ?';
          dbPool.execute(query, [id], (error, results, fields) => {
            if (error) {
              reject(new Error(`Error fetching users: ${error.message}`));
            } else {
              resolve(results);
            }
          })
          // resolve(results);
        }
      });
    });
  },
  deleteUser: async (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM users WHERE id = ?';
      dbPool.execute(query, [id], (error, results, fields) => {
        if (error) {
          reject(new Error(`Error fetching users: ${error.message}`));
        } else {
          resolve(results);
        }
      })
    })
  }

};

export default userModel;
