import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
const router = express.Router();
const auth = require('../controllers/auth');
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const authenticationResult = await auth.authenticateUser(username, password);

    if (authenticationResult.authenticated) {
        // Authentication successful
        return res.json({ message: 'Authentication successful', user: authenticationResult.user, token:authenticationResult.token });
    } else {
        // Authentication failed
        return res.status(401).json({ error: authenticationResult.message });
    }
});

router.use(isAuthenticated);

router.get("/check-auth", isAuthenticated, (req: AuthenticatedRequest, res) => {
    return res.json({ isAuthenticated: true, user: req.user });
});

// Other API routes can be defined here

export default router;