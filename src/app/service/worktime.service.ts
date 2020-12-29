import { Worktime, SportsMan } from './../model/Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorktimeService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addSportsManForWork(idSportsMan: number, id: number): Observable<any> {
    return this.http.post<any>(`${this.url}/addSportsManForWork/${idSportsMan}/${id}`, null); 
   }

  addWorktimeForGym(worktime: Worktime, id: number): Observable<Worktime> {
   return this.http.post<Worktime>(`${this.url}/addWorktimeForGym/${id}`, worktime); 
  }

  editWorktime(worktime: Worktime, id: number, idGym: number): Observable<Worktime> {
    return this.http.put<Worktime>(`${this.url}/editWorktime/${id}/${idGym}`, worktime); 
   }

   deleteWorktime(id: number): Observable<Worktime> {
    return this.http.delete<Worktime>(`${this.url}/deleteWorktime/${id}`); 
   }

   findWorktimeById(id: number): Observable<Worktime> {
    return this.http.get<Worktime>(`${this.url}/findWorktimeById/${id}`); 
   }

   findWorktimesForGym(id: number): Observable<Worktime[]> {
    return this.http.get<Worktime[]>(`${this.url}/findWorktimesForGym/${id}`); 
   }

   findSportsManForWorktime(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/findSportsManForWorktime/${id}`); 
   }
}
