import { Product } from '../../models/product.model';
import * as productsActions from '../actions/products.action';
import { arrayToCollection } from '../../services/helpers';

export interface ProductsState {
  entities: { [id: number]: Product };
  loading: boolean;
  loaded: boolean;
}

const initialState: ProductsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState,
                        action: productsActions.ProductsAction): ProductsState {

  switch (action.type) {
    case productsActions.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case productsActions.LOAD_PRODUCTS_SUCCESS:
      const newEntities = arrayToCollection(action.payload);
      const entities = {
        ...state.entities,
        ...newEntities
      };
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    case productsActions.LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
  }

  return state;
}


