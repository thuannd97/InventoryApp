import { Injectable } from '@angular/core';
import { IPriceService } from './IPriceService';

@Injectable({
  providedIn: 'root'
})
export class PriceService implements IPriceService{

  constructor() { }

  calculateTotalPrice(basePrice: number, state: string): number {
    throw new Error("Method not implemented.");
    return (basePrice + Math.random());
  }

}
