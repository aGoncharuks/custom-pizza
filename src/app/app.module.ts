import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';

// not used in production
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, CustomSerializer } from './store/reducers';
import { AppComponent } from './app.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
