import bcrypt from "bcrypt";
import issueJwt from "../services/issueJwt.js";
import User from "../models/user.js";

export const showUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};


export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hash });
    await user.save();
    const token = issueJwt(user);
    res.send(JSON.stringify({token}));
  } catch (e) {
    res.send({error: "User creation failed!"});
  }
};

export const loginUser = async (req, res) => {
  console.log("Authenticated!");
  res.send(req.user);
};
