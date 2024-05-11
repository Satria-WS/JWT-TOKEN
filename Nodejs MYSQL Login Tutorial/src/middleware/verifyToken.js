import jwt from "jsonwebtoken";
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const JWT_SECRET = "Hello World";

  try {
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }
    
    const decoded =  jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Save decoded token payload to request object
    next(); // Call next middleware
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
}

export default verifyToken;


