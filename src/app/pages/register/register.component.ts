import { Component } from '@angular/core';
import { RegisterRequest } from '../../services/models';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {email: '', name: '', password: ''}
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  onRegister() {
    this.errorMsg = [];
    this.authService.register(this.registerRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
