import { Gym } from './../model/Model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymService {
 
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addGym(gym: Gym): Observable<Gym> {
   return this.http.post<Gym>(`${this.url}/addGym`, gym); 
  }

  editGym(gym: Gym, id: number): Observable<Gym> {
    return this.http.put<Gym>(`${this.url}/editGym/${id}`, gym); 
   }

   deleteGym(id: number): Observable<Gym> {
    return this.http.delete<Gym>(`${this.url}/deleteGym/${id}`); 
   }

   findGymById(id: number): Observable<Gym> {
    return this.http.get<Gym>(`${this.url}/findGymById/${id}`); 
   }

   findAllGyms(): Observable<Gym[]> {
    return this.http.get<Gym[]>(`${this.url}/findAllGyms`); 
   }
}
