import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from '../Entity/Voyage';


@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private apiUrl = 'http://localhost:8081/voyage'; // Update the URL based on your Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  listVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiUrl);
  }

  createVoyage(voyage: Voyage): Observable<Voyage> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Voyage>(this.apiUrl, voyage,{headers});
  }

  updateVoyage(id: number, voyage: Voyage): Observable<Voyage> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Voyage>(`${this.apiUrl}/${id}`, voyage, { headers });
  }

  deleteVoyage(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

  searchVoyages(voyage: Voyage): Observable<Voyage[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Voyage[]>(`${this.apiUrl}/recherche`, voyage, { headers });
  }
}
