import { PriceService } from './price.service';
import { IPriceService } from './IPriceService';

export class Product{

    service: IPriceService;
    basePrice: number;

    constructor(basePrice: number, service: IPriceService){
        this.service = service;
        this.basePrice = basePrice;
    }

    totalPrice(state: string){
        return this.service.calculateTotalPrice(this.basePrice, state);
    }

}