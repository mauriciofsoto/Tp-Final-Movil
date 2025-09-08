import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  register(nombre: string, email: string, password: string, fecha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { nombre, email, password, fecha }, { withCredentials: true });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }
}
