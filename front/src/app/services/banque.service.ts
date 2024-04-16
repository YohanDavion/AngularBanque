import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createClient(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clients/creer`, formData);
  }

  createCompte(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comptes/creer`, formData);
  }

  getAllClients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clients/liste`);
  }

  getCompte(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comptes/liste/${id}`);
  }
}