import bcrypt from "bcrypt";
import issueJwt from "../services/issueJwt.js";
import User from "../models/user.js";

export const showUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};


export const createUser = async (req, res) => {
  try {
    const { username, password, image } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hash, image });
    await user.save();
    const jwt = issueJwt(user);
    res.send({jwt, user});
  } catch (e) {
    res.status(500);
    res.send({error: "User creation failed!"});
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && bcrypt.compare(password, user.password)) {
      const jwt = issueJwt(user);
      res.send(JSON.stringify({jwt, user}));
    } else {
      res.status(401);
      res.send({error: "Login failed!"});
    }
  } catch (e) {
    res.send({error: "User login failed!"});
  }
};
