import { Arbitrate } from './../model/Model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitrateService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addArbitrateForGym(arbitrate: Arbitrate, idGym: number): Observable<Arbitrate> {
   return this.http.post<Arbitrate>(`${this.url}/addArbitrateForGym/${idGym}`, arbitrate); 
  }
  addArbitrateForSport(idArbitrate: number, idSport: number): Observable<Arbitrate> {
    return this.http.post<Arbitrate>(`${this.url}/addArbitrateForSport/${idArbitrate}/${idSport}`, null); 
   }
  editArbitrate(arbitrate: Arbitrate, id: number): Observable<Arbitrate> {
    return this.http.put<Arbitrate>(`${this.url}/editArbitrate/${id}`, arbitrate); 
   }

  findArbitrateById(id: number): Observable<Arbitrate> {
    return this.http.get<Arbitrate>(`${this.url}/findArbitrateById/${id}`); 
   }

  deleteArbitrate(id: number): Observable<Arbitrate> {
    return this.http.delete<Arbitrate>(`${this.url}/deleteArbitrate/${id}`); 
   }
   findAllArbitrates(): Observable<Arbitrate[]> {
    return this.http.get<Arbitrate[]>(`${this.url}/findAllArbitrates`); 
   }
   findArbitratesForGym(idGym :number): Observable<Arbitrate[]> {
    return this.http.get<Arbitrate[]>(`${this.url}/findArbitratesForGym/${idGym}`); 
   }
   findArbitratesForSport(idSport :number): Observable<Arbitrate[]> {
    return this.http.get<Arbitrate[]>(`${this.url}/findArbitratesForSport/${idSport}`); 
   }

   
}
