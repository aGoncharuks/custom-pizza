import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

import { Product } from '../../models/product.model';
import { collectionToArray } from '../../services/helpers';

export const getToppingsState =
  createSelector(fromFeature.getModuleState, (state: fromFeature.ModuleState) => state.toppings);

export const getToppingsEntities =
  createSelector(getToppingsState, (state: fromToppings.ToppingsState) => state.entities);

export const getToppingsData =
  createSelector(getToppingsEntities, (entities: { [id: number]: Product }) => collectionToArray(entities));

export const getToppingsLoading =
  createSelector(getToppingsState, (state: fromToppings.ToppingsState) => state.loading);

export const getToppingsLoaded =
  createSelector(getToppingsState, (state: fromToppings.ToppingsState) => state.loaded);

export const getSelectedToppings =
  createSelector(getToppingsState, (state: fromToppings.ToppingsState) => state.selectedToppings);
