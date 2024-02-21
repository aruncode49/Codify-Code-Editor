import toast from "react-hot-toast";

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateUsername(username) {
  if (username.length < 6) {
    toast.error("Username should be 6 characters long");
    return false;
  }
  if (username !== username.toLowerCase()) {
    toast.error("Username should be lowercase");
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.length < 6) {
    toast.error("Password length should be 6 characters long");
    return false;
  }
  return true;
}

export function validateForm(email, username, password) {
  if (!email || !username || !password) {
    toast.error("All fields are required.");
    return false;
  }

  if (!validateEmail(email)) {
    toast.error("Please enter a valid email address.");
    return false;
  }

  if (!validateUsername(username)) {
    return false;
  }

  if (!validatePassword(password)) {
    return false;
  }

  return true;
}
