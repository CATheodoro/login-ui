import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set accessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  get accessToken() {
    return localStorage.getItem('accessToken') as string;
  }

  set refreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  get refreshToken() {
    return localStorage.getItem('refreshToken') as string;
  }
}
