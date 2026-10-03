// lib/users-db.ts

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string; // bcrypt-hashed password
}

// Example user — replace passwordHash with a real bcrypt hash
export const users: User[] = [
  {
    id: 1,
    name: 'Rammy',
    email: 'rammy@example.com',
    // Replace this with bcrypt.hashSync('yourpassword', 10)
    passwordHash: '$2b$10$ZIyxJPBTP27i8LvKeHddien5/1UfnyUGdIz/BDyRYks.bx/HnvoPK',
  },
];

// Helper to find a user by email
export function getUserByEmail(email: string): User | null {
  return users.find((u) => u.email === email) ?? null;
}
