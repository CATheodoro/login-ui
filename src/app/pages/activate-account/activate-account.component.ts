import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { skipUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, CodeInputModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  message = '';
  isOkay = true;
  submitted = false;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  private confirmAccount(token: string) {
    this.authService.confirmAccount(token).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

  onRedirectToLogin() {
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  protected readonly skipUntil = skipUntil;
}