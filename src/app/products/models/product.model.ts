import { Topping } from '../models/topping.model';

export interface Product {
  id?: number;
  name?: string;
  toppings?: Topping[];
}
