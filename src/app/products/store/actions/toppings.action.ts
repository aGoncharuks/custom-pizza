import { Action } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

/** Action constants */

export const LOAD_TOPPINGS = '[Toppings] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Toppings] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Toppings] Load Toppings Success';
export const VISUALIZE_TOPPINGS = '[Toppings] Visualize Toppings';

/** Action creators */
export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;

  constructor(public payload: Topping[]) {
  }
}

export class VisualizeToppings implements Action {
  readonly type = VISUALIZE_TOPPINGS;

  constructor(public payload: number[]) {
  }
}

export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualizeToppings;
