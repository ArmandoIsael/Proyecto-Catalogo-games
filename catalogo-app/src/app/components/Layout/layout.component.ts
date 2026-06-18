import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  // Esto se ejecuta en cuanto aparece la barra superior
  ngOnInit() {
    // Busca tu nombre guardado, o pone 'Usuario' por defecto
    this.username = localStorage.getItem('savedUsername') || 'Usuario';
  }

  onLogout() {
    // 1. Destruimos las llaves de seguridad
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('savedUsername');

    // 2. Te mandamos de regreso a la calle (al Login)
    this.router.navigate(['/login']);
  }
}
