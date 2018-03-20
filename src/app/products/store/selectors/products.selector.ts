import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromProducts from '../reducers/products.reducer';
import * as fromToppings from './toppings.selector';

import { Product } from '../../models/product.model';
import { collectionToArray } from '../../services/helpers';

export const getProductsState =
  createSelector(fromFeature.getModuleState, (state: fromFeature.ModuleState) => state.products);

export const getProductsEntities =
  createSelector(getProductsState, (state: fromProducts.ProductsState) => state.entities);

export const getProductsData =
  createSelector(getProductsEntities, (entities: { [id: number]: Product }) => collectionToArray(entities));

export const getSelectedProduct =
  createSelector(
    getProductsEntities,
    fromRoot.getRouterState,
    (entities, router): Product => {
      return router.state && entities[router.state.params.productId];
    });

export const getProductVisualized =
  createSelector(
    getSelectedProduct,
    fromToppings.getToppingsEntities,
    fromToppings.getSelectedToppings,
    (product, toppingsEntities, selectedToppings) => {
      const toppings = selectedToppings.map(toppingId => toppingsEntities[toppingId]);
      return {
        ...product,
        toppings
      };
    });

export const getProductsLoading =
  createSelector(getProductsState, (state: fromProducts.ProductsState) => state.loading);

export const getProductsLoaded =
  createSelector(getProductsState, (state: fromProducts.ProductsState) => state.loaded);
