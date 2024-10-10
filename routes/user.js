// routes/userRoutes.mjs
import express from 'express';
import { registerUser, loginUser, deleteUser, getUserById, getAllUsers } from '../controllers/user.js';

const router = express.Router();

router.post('/user/register', registerUser);  // Register user
router.post('/user/login', loginUser);        // Login user
router.delete('user/delete/:id', deleteUser);       // Delete user
router.get('/:id', getUserById);     // Route to get a user by ID
router.get('/', getAllUsers);       // Route to get all users


export default router;
