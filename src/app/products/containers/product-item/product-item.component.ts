import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Product } from '../../models/product.model';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="product$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  product$: Observable<Product>;
  visualise$: Observable<Product>;
  toppings$: Observable<Topping[]>;

  constructor(
    private store: Store<fromStore.ModuleState>
  ) {}

  ngOnInit() {
    this.product$ = this.store.select(fromStore.getSelectedProduct).pipe(
      tap((product: Product = null) => {
        const pizzaExists = !!(product && product.toppings);
        const toppings = pizzaExists ? product.toppings.map(topping => topping.id) : [];
        this.store.dispatch(new fromStore.VisualizeToppings(toppings));
      })
    );
    this.toppings$ = this.store.select(fromStore.getToppingsData);
    this.visualise$ = this.store.select(fromStore.getProductVisualized);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualizeToppings(event));
  }

  onCreate(event: Product) {

  }

  onUpdate(event: Product) {

  }

  onRemove(event: Product) {
    const remove = window.confirm('Are you sure?');
    if (remove) {

    }
  }
}
