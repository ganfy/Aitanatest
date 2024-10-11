import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(username: string, password: string) {
    return this.http.post('http://localhost:3000/auth/sign-up', { username, password });
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/auth/log-in', { username, password });
  }
}
