import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromServices from '../../services';
import * as productsActions from '../actions/products.action';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: fromServices.PizzasService
  ) {}

  @Effect()
  loadProducts$ = this.actions$
    .ofType(productsActions.LOAD_PRODUCTS)
    .pipe(switchMap(() => this.productsService.getPizzas()
      .pipe(
        map(products => new productsActions.LoadProductsSuccess(products)),
        catchError(error => of(new productsActions.LoadProductsFail(error)))
      )));
}
