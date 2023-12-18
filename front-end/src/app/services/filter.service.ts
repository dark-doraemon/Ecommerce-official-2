import { EnvironmentInjector, EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product.model';
import { Brand } from '../models/Brand.model';
import { Category } from '../models/Category.model';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    constructor() { }

    //dùng dể emit các sản phẩm đã lọc theo giá cho product
    filterByPrice : EventEmitter<Product[]> = new EventEmitter<Product[]>();

    //dùng để emit các sản phẩm đã lọc theo Bradn cho product
    filterByBrand : EventEmitter<Product[]> = new EventEmitter<Product[]>();

    //dùng để emit các sản phẩm đã lọc theo category cho product
    filterByCategory : EventEmitter<Product[]> = new EventEmitter<Product[]>();
}
