import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { CatalogComponent } from './components/catalogo/catalog.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard], // <-- ¡AQUÍ ESTÁ EL CADENERO PROTEGIENDO EL CATÁLOGO!
    children: [
      { path: 'catalog', component: CatalogComponent },
      { path: '', redirectTo: 'catalog', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }
];
