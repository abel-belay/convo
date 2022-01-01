import User from "../models/user.js";

export const showUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    res.send("Success!");
  } catch (e) {
    res.send(e.message);
  }
};

export const loginUser = async (req, res) => {
  res.send(req.user);
};
