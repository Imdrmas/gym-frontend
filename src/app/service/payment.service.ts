import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addPayment(payment: Payment, id: number): Observable<Payment> {
   return this.http.post<Payment>(`${this.url}/addPayment/${id}`, payment); 
  }

  editPayment(payment: Payment, id: number): Observable<Payment> {
    return this.http.put<Payment>(`${this.url}/editPayment/${id}`, payment); 
   }

   deletePayment(id: number): Observable<Payment> {
    return this.http.delete<Payment>(`${this.url}/deletePayment/${id}`); 
   }

   findPaymentById(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.url}/findPaymentById/${id}`); 
   }

   findPaymentForSportsMan(id: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.url}/findPaymentForSportsMan/${id}`); 
   }
}
