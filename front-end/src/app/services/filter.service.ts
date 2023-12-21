import { EnvironmentInjector, EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product.model';
import { Brand } from '../models/Brand.model';
import { Category } from '../models/Category.model';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    constructor() { }

    brandId : EventEmitter<string> = new EventEmitter<string>();// dùng đê emit brandId
    priceId : EventEmitter<number> = new EventEmitter<number>();// emit price
    categoryId : EventEmitter<string> = new EventEmitter<string>(); //emit categoryId

}
