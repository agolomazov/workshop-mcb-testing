export function validateUserInput(username: string, age: number) {
  const errors = [];

  if (username.length < 3) {
    errors.push('Invalid username');
  }

  if (age < 18) {
    errors.push('Invalid age');
  }

  return errors.length === 0 ? 'Validation successful' : errors.join(', ');
}
