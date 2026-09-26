import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MockAuthService } from '../../../core/services/mock-auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.less',
})
export class Login {
  private readonly authService = inject(MockAuthService);
  private readonly router = inject(Router);

  protected email = '';
  protected password = '';

  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal('');

  protected async login(): Promise<void> {
    this.errorMessage.set('');

    if (!this.email || !this.password) {
      this.errorMessage.set(
        'Please enter your email and password.'
      );
      return;
    }

    this.isLoading.set(true);

    // Simulate network latency for the demo.
    await new Promise((resolve) => setTimeout(resolve, 500));

    const authenticated = this.authService.login(
      this.email,
      this.password
    );

    this.isLoading.set(false);

    if (!authenticated) {
      this.errorMessage.set(
        'We couldn’t sign you in with those credentials.'
      );
      return;
    }

    await this.router.navigate(['/student/dashboard']);
  }

  protected goToLanding(): void {
    this.router.navigate(['/']);
  }
}