import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

// reducers
import { moduleReducers, moduleEffects } from './store';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
  },
  {
    path: 'new',
    component: fromContainers.ProductItemComponent,
  },
  {
    path: ':productId',
    component: fromContainers.ProductItemComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', moduleReducers),
    EffectsModule.forFeature(moduleEffects)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})

export class ProductsModule {}
