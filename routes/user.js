// routes/userRoutes.mjs
import express from 'express';
import { registerUser, loginUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.post('/register', registerUser);  // Register user
router.post('/login', loginUser);        // Login user
router.delete('/:id', deleteUser);       // Delete user

export default router;
