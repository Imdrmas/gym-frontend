import { Sport, Worktime } from './../model/Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addSportForSportsMan(idSport: number, idSportsMan: number): Observable<any> {
    return this.http.post<any>(`${this.url}/addSportForSportsMan/${idSport}/${idSportsMan}`, null); 
   }

  addSportForGym(sport: Sport, idGym: number): Observable<Sport> {
   return this.http.post<Sport>(`${this.url}/addSportForGym/${idGym}`, sport); 
  }

  editSport(sport: Sport, id: number): Observable<Sport> {
    return this.http.put<Sport>(`${this.url}/editSport/${id}`, sport); 
   }

   deleteSportFromGym(id: number, idGym: number): Observable<Sport> {
    return this.http.delete<Sport>(`${this.url}/deleteSportFromGym/${id}/${idGym}`); 
   }

   findSportById(id: number): Observable<Sport> {
    return this.http.get<Sport>(`${this.url}/findSportById/${id}`); 
   }

   findSportsForGym(id: number): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.url}/findSportsForGym/${id}`); 
   }

   findSportsForSportsMan(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/findSportsForSportsMan/${id}`); 
   }
}
