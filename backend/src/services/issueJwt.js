import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const issueJwt = (user) => {

  const payload = {
    sub: user._id,
    iat: Date.now(),
  }

  const signedToken = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "1d", algorithm: "HS256"});
  return signedToken;
}

export default issueJwt;