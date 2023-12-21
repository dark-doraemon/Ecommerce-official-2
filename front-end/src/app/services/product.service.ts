import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = new EventEmitter<Product[]>();

    pagninatedResult
    constructor(private http : HttpClient) { }

    GetProducts()
    {
        return this.http.get<Product[]>(environment.baseApiUrl + 'products');
    }

    GetProductById(id : string)
    {
        return this.http.get<Product>(environment.baseApiUrl + 'products/' + id);
    }
}
