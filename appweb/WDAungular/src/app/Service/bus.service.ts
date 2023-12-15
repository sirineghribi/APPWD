import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../Entity/Bus';


@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://localhost:8083/bus'; // Update the URL based on your Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/hello`);
  }

  getListBus(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.apiUrl);
  }

  createBus(bus: Bus): Observable<Bus> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Bus>(this.apiUrl, bus, { headers });
  }

  updateBus(id: number, bus: Bus): Observable<Bus> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Bus>(`${this.apiUrl}/${id}`, bus, { headers });
  }

  deleteBus(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}