import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getClientList(): Observable<any> {
    return this.http.get<any>('${this.apiUrl}/client/liste');
  }
}