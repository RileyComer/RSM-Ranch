import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';
const secretKey = process.env.SECRET_KEY;

const isAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey) as { id: string, username: string };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default isAuthenticated;