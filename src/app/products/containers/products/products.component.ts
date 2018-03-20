import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Product } from '../../models/product.model';

@Component({
  selector: 'products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((products$ | async )?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (products$ | async)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromStore.ModuleState>) {}

  ngOnInit() {
    this.products$ = this.store.select(fromStore.getProductsData);
    this.store.dispatch(new fromStore.LoadProducts());
    this.store.dispatch(new fromStore.LoadToppings());
  }
}
