import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportsMan } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class SportsManService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addSportsMan(sportsMan: SportsMan, id: number): Observable<SportsMan> {
   return this.http.post<SportsMan>(`${this.url}/addSportsMan/${id}`, sportsMan); 
  }

  editSportsMan(sportsMan: SportsMan, id: number): Observable<SportsMan> {
    return this.http.put<SportsMan>(`${this.url}/editSportsMan/${id}`, sportsMan); 
   }

   deleteSportsMan(id: number): Observable<SportsMan> {
    return this.http.delete<SportsMan>(`${this.url}/deleteSportsMan/${id}`); 
   }

   findSportsManById(id: number): Observable<SportsMan> {
    return this.http.get<SportsMan>(`${this.url}/findSportsManById/${id}`); 
   }

   findAllSportsMans(): Observable<SportsMan[]> {
    return this.http.get<SportsMan[]>(`${this.url}/findAllSportsMans`); 
   }
}
