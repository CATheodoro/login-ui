import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

interface ErrorMessage {
  code: number;
  message: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onLogin() {
    this.authService.authenticate(this.authRequest).subscribe({
      next: (res) => {
        this.router.navigate(['users']);
      },
      error: (err) => {
        
        if (err.errors && err.errors.messages) {
          this.errorMsg = err.errors.messages.map((msg: ErrorMessage) => msg.message);
        } else {
          this.errorMsg = ["e-mail ou senha incorreto."];
        }
        console.log(this.errorMsg);
      }
    });
  }

  onRegister() : void {
    this.router.navigate(['register']);
  }
}
