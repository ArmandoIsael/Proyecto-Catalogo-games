import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'admin';
  password = 'cesun123';


  constructor(private router: Router) {}

  onLogin() {
    // Verificamos si la contraseña es correcta
    if (this.username && this.password === 'cesun123') {

      // 1. Guardamos la "llave" y tu nombre en la memoria del navegador
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('savedUsername', this.username);

      // 2. Te dejamos pasar al catálogo
      this.router.navigate(['/catalog']);

    } else {
      alert('Contraseña incorrecta.');
    }
  }
}
