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

  createVirement(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/virements/creer`, formData);
  }

  getAllClients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clients/liste`);
  }

  getCompte(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comptes/liste/${id}`);
  }

  deleteCompte(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/comptes/delete/${id}`);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/clients/delete/${id}`);
  }
}