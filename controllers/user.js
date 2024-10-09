import { UserModel } from '../models/user.js';

// Create a new user
export const createUser = async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    
    res.status(500).send('Error creating user');
  }
};

// Get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    
    res.status(500).send('Error fetching users');
  }
};

// Get a single user by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).send(user);
  } catch (error) {
    
    res.status(500).send('Error fetching user');
  }
};

// Update a user by ID
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).send('User not found');
    res.status(200).send(updatedUser);
  } catch (error) {
        
    res.status(500).send('Error updating user');
  }
};

// Delete a user by ID`
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send('User not found');
    res.status(200).send('User deleted successfully');
  } catch (error) {
    next(error)
    res.status(500).send('Error deleting user');
  }
};
