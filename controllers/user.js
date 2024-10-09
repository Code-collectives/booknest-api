import userModel from "../models/user.js";

const createUser = async (req, res) => {
    try {
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // In real-world scenarios, make sure to hash passwords!
      });
  
      const savedUser = await newUser.save(); // Save user to the database
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(500).send('Error creating user');
    }
  };

  const getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find(); // Fetch all users
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send('Error fetching users');
    }
  };

  const getUserById = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id); // Find user by ID
      if (!user) return res.status(404).send('User not found');
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send('Error fetching user');
    }
  };

  const updateUser = async (req, res) => {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) return res.status(404).send('User not found');
      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(500).send('Error updating user');
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).send('User not found');
      res.status(200).send('User deleted successfully');
    } catch (error) {
      res.status(500).send('Error deleting user');
    }
  };