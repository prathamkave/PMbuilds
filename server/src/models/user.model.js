import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({});

const userModel = mongoose.model('users', userSchema);

export default userModel;
