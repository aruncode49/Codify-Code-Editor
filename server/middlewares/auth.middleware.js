import passport from "passport";

export function authenticateUser(req, res, next) {
  passport.authenticate("local", function (err, user, info, status) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error in user login",
        error: err.message,
      });
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
    next();
  })(req, res, next);
}
