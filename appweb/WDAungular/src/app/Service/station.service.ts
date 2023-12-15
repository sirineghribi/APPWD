import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../Entity/Station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private apiUrl = 'http://localhost:8082/station'; // Update the URL based on your Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  addStation(station: Station): Observable<Station> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Station>(`${this.apiUrl}/addstation`, station, { headers });
  }

  updateStation(idStation: number, station: Station): Observable<Station> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Station>(`${this.apiUrl}/update/${idStation}`, station, { headers });
  }

  deleteStation(idStation: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${idStation}`);
  }

  getAllStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.apiUrl}/getAll`);
  }
}