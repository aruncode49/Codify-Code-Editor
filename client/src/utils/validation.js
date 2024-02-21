import toast from "react-hot-toast";

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateUsername(username) {
  const usernameRegex = /^[a-z0-9]{6,}$/;
  return usernameRegex.test(username) && username === username.toLowerCase();
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{4,}$/;
  return passwordRegex.test(password);
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
    toast.error(
      "Username should be at least 6 characters long and contain only lowercase letters and numbers."
    );
    return false;
  }

  if (!validatePassword(password)) {
    toast.error(
      "Password should be at least 4 characters long and contain at least one letter and one number."
    );
    return false;
  }

  return true;
}
