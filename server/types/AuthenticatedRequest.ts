import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  [x: string]: any;
  user?: { id: string, username: string };
}
