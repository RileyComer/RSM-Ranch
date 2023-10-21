import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';
const secretKey = process.env.SECRET_KEY;

const isAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Get the JWT token from the session cookie
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // If there is no token, the user is not authenticated
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Check if the token exists
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token using your JWT_SECRET
    const decoded = jwt.verify(token, secretKey) as { id: string, username: string };
    // Attach the decoded payload to the request object for further use
    req.user = decoded;
    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // If the token is invalid, return an error response
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default isAuthenticated;