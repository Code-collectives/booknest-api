import { Router } from 'express';
import {createUser, getAllUsers, getUserById, updateUser, deleteUser} from '/con'
import { Schema } from 'mongoose';

//create a router
const userRouter = Router();
const router = express.Router();

//define routes
router.post('/users', createUser); // Create a new user
router.get('/users', getAllUsers); // Get all users
router.get('/users/:id', getUserById); // Get a user by ID
router.put('/users/:id', updateUser); // Update a user
router.delete('/users/:id', deleteUser); // Delete a user

//export router
export default userRouter;
