import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse, RegisterRequest } from '../models';
import { Observable, map } from 'rxjs';
import { TokenService } from '../token/token.service';

const BASIC_URL = 'http://localhost:8080';
const AUTH_URL = '/api/v1/auth';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  register(request: RegisterRequest): Observable<any>{
    return this.http.post(BASIC_URL + AUTH_URL + "/register", request)
  }

  authenticate(request: AuthenticationRequest){
    return this.http.post(BASIC_URL + AUTH_URL + "/authenticate", request)
      .pipe(
        map((res: AuthenticationResponse) =>{
          console.log(res)
          this.tokenService.accessToken = res.accessToken as string;
          return res;
        })
      )
  }

  confirmAccount(token: string): Observable<any>{
    return this.http.get(BASIC_URL + AUTH_URL + "/activate-account" + `?token=${token}`)
  }
}
