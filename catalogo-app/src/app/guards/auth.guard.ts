import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

// Esta es la función del cadenero
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuth = localStorage.getItem('isAuthenticated');

  if (isAuth === 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
