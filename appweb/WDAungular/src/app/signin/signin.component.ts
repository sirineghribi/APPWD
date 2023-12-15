import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Check if email and password are 'admin'
    if (this.email === 'sirine.ghribi@esprit.tn' && this.password === 'admin') {
      // Redirect to the back page
      this.router.navigate(['/back']);
    } else  if (this.email === 'zeineb.benmami@esprit.tn' && this.password === 'user'){
      // Redirect to the front page
      this.router.navigate(['/front']);
    }
    else alert("login failed");
  }

}
