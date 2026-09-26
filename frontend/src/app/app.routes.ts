import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing-page/landing-page')
        .then(m => m.LandingPage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'student/dashboard',
    loadComponent: () =>
      import('./features/student/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
  path: 'assistant',
  loadComponent: () =>
    import('./feature/ai-assistant/ai-assistant')
      .then(m => m.AiAssistant)
  },
  {
    path: '**',
    redirectTo: ''
  }
];