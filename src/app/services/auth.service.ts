import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe, userLoginCriteria } from '../models/employe.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth';
  constructor(private http: HttpClient) {}
  login(criteria: userLoginCriteria): Observable<Employe> {
    console.log('criteria', criteria)
    return this.http.post<Employe>(`${this.apiUrl}/login`, criteria);
  }
}
