import { User } from "../models/user.model.js";

async function signupController(req, res) {
  try {
    console.log("before signup", req.user);
    const { email, username, password } = req.body;
    const newUser = new User({
      email,
      username,
    });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) console.log(err);
    });
    console.log("after signup", req.user);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in user signup",
      error: error.message,
    });
  }
}

async function loginController(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in user login",
      error: error.message,
    });
  }
}

function logoutController(req, res) {
  try {
    req.logout((err) => {
      if (err) console.log(err);
    });
    console.log(req.user);
    return res.status(200).json({
      success: true,
      message: "User logout successfully",
    });
  } catch (error) {
    console.log(error);
  }
}

export { signupController, loginController, logoutController };
