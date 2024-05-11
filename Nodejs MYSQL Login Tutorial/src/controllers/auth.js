import { db } from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Helper function to hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Register user
const isEmailInUse = async (email) => {
  const [isUser] = await db
    .promise()
    .query("SELECT email FROM users WHERE email = ?", [email]);
  // console.log(existingUser)
  return isUser.length > 0;
};

// Register user
export const register = async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;

  try {
    // Check if email already exists
    if (await isEmailInUse(email)) {
      return res.status(400).render("register", {
        message: "That email is already in use",
      });
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
      return res.status(400).render("register", {
        message: "Passwords do not match",
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Insert new user into the database
    await db
      .promise()
      .query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
        name,
        email,
        hashedPassword,
      ]);

    // Respond with success message
    res.send("Form submit success");
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const JWT_SECRET = "Hello World";
  try {
    const [isUser] = await db
      .promise()
      .query("SELECT id, email, password FROM users WHERE email = ?", [email]);

    if (isUser.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //check password

    const { id, password: hashPassword } = isUser[0]; // Changed from hashPassword to password
    // console.log(id , hashPassword)// hash password was undefined before
    const passwordCompare = await bcrypt.compare(password, hashPassword);

    // console.log("password?", password);
    // console.log("hashPassword?", hashPassword);
    if (!passwordCompare) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log(passwordCompare)
    //Generate JWT Token
    const token = jwt.sign({ id, email }, JWT_SECRET, { expiresIn: "1000" });
    console.log(token);
   
    res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
