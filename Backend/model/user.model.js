import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {  // The field name should be 'password' here, not 'hashedPassword'
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);
export default User;
