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
    // If authentication succeeds, manually set req.user and call next
    req.login(user, function (err) {
      if (err) {
        return next(err);
      }
      next();
    });
  })(req, res, next);
}

export function isLogin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: "Please login to proceed!",
    });
  }
  next();
}
