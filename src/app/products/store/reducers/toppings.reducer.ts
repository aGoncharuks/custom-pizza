import { Topping } from '../../models/topping.model';
import * as toppingsActions from '../actions/toppings.action';
import { arrayToCollection } from '../../services/helpers';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
  selectedToppings: number[];
}

const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
};

export function reducer(state = initialState,
                        action: toppingsActions.ToppingsAction): ToppingsState {

  switch (action.type) {
    case toppingsActions.LOAD_TOPPINGS:
      return {
        ...state,
        loading: true
      };
    case toppingsActions.LOAD_TOPPINGS_SUCCESS:
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
    case toppingsActions.LOAD_TOPPINGS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case toppingsActions.VISUALIZE_TOPPINGS:
      const selectedToppings = action.payload;
      return {
        ...state,
        loading: true,
        loaded: false,
        selectedToppings
      };
  }

  return state;
}


