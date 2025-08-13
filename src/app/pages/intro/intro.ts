import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss']
})
export class Intro implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Auto navegação após 3 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  // Navegar para login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
