import * as productsReducer from './products.reducer';
import * as toppingsReducer from './toppings.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ModuleState {
  products: productsReducer.ProductsState;
  toppings: toppingsReducer.ToppingsState;
}

export const moduleReducers: ActionReducerMap<ModuleState> = {
  products: productsReducer.reducer,
  toppings: toppingsReducer.reducer
};

export const getModuleState = createFeatureSelector<ModuleState>('products');
