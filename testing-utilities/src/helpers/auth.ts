import { isValidEmail, sendEmail } from './email';
import security from './security';

export async function signUp(email: string) {
  if (!isValidEmail(email)) return false;

  await sendEmail(email, 'Welcome aboard!');

  return true;
}

// Lesson: Spying on functions
export async function login(email: string) {
  const code = security.generateCode();

  await sendEmail(email, code.toString());
}
