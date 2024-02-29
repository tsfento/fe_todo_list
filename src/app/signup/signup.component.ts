import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user = {
    username: '',
    password: '',
    password_confirmation: ''
  };

  constructor(private authService:AuthenticationService, private router:Router) {}

  onSubmit() {
    if (this.user.password === this.user.password_confirmation) {
      this.authService.signUp(this.user).subscribe({
        next: (res:any) => {
          console.log('Sign up successful', res);
          this.router.navigate(['/login']);
        },
        error: (error:any) => {
          console.error('Sign up failed', error);
        }
      })
    } else {
      console.error('Passwords do not match');
    }
  }
}
