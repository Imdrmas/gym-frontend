import { Train } from './../model/Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addTrainForGym(train: Train, idGym: number): Observable<Train> {
   return this.http.post<Train>(`${this.url}/addTrainForGym/${idGym}`, train); 
  }

  addTrainForSport(idTrain: number, idSport: number): Observable<Train> {
   return this.http.post<Train>(`${this.url}/addTrainForSport/${idTrain}/${idSport}`, null); 
  }
  editTrain(train: Train, id: number): Observable<Train> {
    return this.http.put<Train>(`${this.url}/editTrain/${id}`, train); 
   }

  findTrainById(id: number): Observable<Train> {
    return this.http.get<Train>(`${this.url}/findTrainById/${id}`); 
   }

  deleteTrain(id: number): Observable<Train> {
    return this.http.delete<Train>(`${this.url}/deleteTrain/${id}`); 
   }

   findAllTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.url}/findAllTrains`); 
   }

   findTrainsForGym(idGym: number): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.url}/findTrainsForGym/${idGym}`); 
   }

   findTrainsForSport(idSport: number): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.url}/findTrainsForSport/${idSport}`); 
   }
}
