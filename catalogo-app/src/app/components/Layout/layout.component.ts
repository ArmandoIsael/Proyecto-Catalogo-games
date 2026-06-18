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


  ngOnInit() {
    
    this.username = localStorage.getItem('savedUsername') || 'Usuario';
  }

  onLogout() {

    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('savedUsername');


    this.router.navigate(['/login']);
  }
}
