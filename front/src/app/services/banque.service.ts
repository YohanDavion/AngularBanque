import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /*getClientList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client/liste`);
  }*/

  createClient(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clients/creer`, formData);
  }

  getAllClients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clients/liste`);
  }
}