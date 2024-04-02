import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/accounts`);
  }

  transferFunds(senderId: number, receiverId: number, amount: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/transactions`, { senderId, receiverId, amount });
  }
}
