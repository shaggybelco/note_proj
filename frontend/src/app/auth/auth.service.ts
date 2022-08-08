import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(body: any){
    return this.http.post(`${this.baseUrl}/register`, body, {responseType: 'json'});
  }

  login(body: any){
    return this.http.post(`${this.baseUrl}/login`, body, {responseType: 'json'});
  }
}
