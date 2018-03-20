import { ToppingsService } from './toppings.service';
import { PizzasService } from './pizzas.service';

export const services: any[] = [PizzasService, ToppingsService];

export * from './pizzas.service';
export * from './toppings.service';