import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import PassportJWT from "passport-jwt";
const JWTStrategy = PassportJWT.Strategy;
import User from "../models/user.js";

const passportLoader = async (app) => {
  app.use(passport.initialize());

  // FUNCTION TO EXTRACT JWT VIA HTTP REQUEST COOKIE.
  const cookieExtractor = (req) => {
    let token = null;
    console.log(req.cookies);
    if (req && req.cookies) {
      token = req.cookies.jwt;
    }
    return token;
  };

  const jwtOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET,
    jsonWebTokenOptions: {
      maxAge: "2d",
    },
  };

  passport.use(
    new JWTStrategy(jwtOptions, async (payload, done) => {
      try {
        const user = await User.findOne({ _id: payload.sub });

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
};

export default passportLoader;
