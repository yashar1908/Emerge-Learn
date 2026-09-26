import { Injectable, signal } from '@angular/core';

export type UserRole = 'student' | 'teacher' | 'admin';

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface MockUserRecord extends MockUser {
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  private readonly currentUser = signal<MockUser | null>(null);

  readonly user = this.currentUser.asReadonly();

  private readonly users: MockUserRecord[] = [
    {
      id: 'student-001',
      name: 'Yash',
      email: 'student@emerge.learn',
      password: 'student123',
      role: 'student',
    },
    {
      id: 'teacher-001',
      name: 'Demo Teacher',
      email: 'teacher@emerge.learn',
      password: 'teacher123',
      role: 'teacher',
    },
    {
      id: 'admin-001',
      name: 'School Admin',
      email: 'admin@emerge.learn',
      password: 'admin123',
      role: 'admin',
    },
  ];

  login(email: string, password: string): boolean {
    const matchedUser = this.users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!matchedUser) {
      return false;
    }

    const { password: _, ...user } = matchedUser;

    this.currentUser.set(user);

    localStorage.setItem('emerge_user', JSON.stringify(user));

    return true;
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('emerge_user');
  }

  restoreSession(): void {
    const storedUser = localStorage.getItem('emerge_user');

    if (!storedUser) {
      return;
    }

    try {
      const user = JSON.parse(storedUser) as MockUser;
      this.currentUser.set(user);
    } catch {
      localStorage.removeItem('emerge_user');
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
}