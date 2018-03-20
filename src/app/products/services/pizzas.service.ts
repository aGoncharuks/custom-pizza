import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Product } from '../models/product.model';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`http://localhost:3000/api/get/pizzas`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  createPizza(payload: Product): Observable<Product> {
    return this.http
      .post<Product>(`/api/pizzas`, payload)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  updatePizza(payload: Product): Observable<Product> {
    return this.http
      .put<Product>(`/api/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  removePizza(payload: Product): Observable<Product> {
    return this.http
      .delete<any>(`/api/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
