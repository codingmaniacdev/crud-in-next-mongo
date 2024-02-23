import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    email: String,
    country: String,
    state: String,
    city: String,
    about: String,
    zip: Number
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;