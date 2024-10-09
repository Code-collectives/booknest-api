import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String, required: true,
  email: String, required: true, unique: true,
  password: String, required: true, 
});

const userModel = mongoose.model('user', bookSchema);

export default userModel;
 