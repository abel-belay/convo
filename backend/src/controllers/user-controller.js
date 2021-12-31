import User from "../models/user.js";

export const showUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
}