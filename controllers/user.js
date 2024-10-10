// controllers/userController.mjs
import { UserModel } from '../models/user.js';

// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new UserModel({ name, email, password });
  await newUser.save();
  res.send('User registered');
};

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  if (!user) return res.status(400).send('Invalid credentials');
  res.send('User logged in');
};

// Delete user by ID
export const deleteUser = async (req, res) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.send('User deleted');
};
