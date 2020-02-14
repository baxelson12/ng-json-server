import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API = '/api/users/';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  get(id: number) {
    return this.http.get(API + id);
  }

  post(user: any) {
    return this.http.post(API, user);
  }
}
