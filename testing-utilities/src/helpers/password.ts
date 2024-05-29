export function isStrongPassword(password: string) {
  // Check the length of the password (minimum 8 characters)
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit (number)
  if (!/\d/.test(password)) {
    return false;
  }

  // If all criteria are met, consider the password strong
  return true;
}
