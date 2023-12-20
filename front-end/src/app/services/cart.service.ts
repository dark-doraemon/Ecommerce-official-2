import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/Cart.model';
import { every } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http : HttpClient) { }


    GetProductsInCart(personId)
    {
        return this.http.get<Cart>(environment.baseApiUrl + 'cart/' + personId);
    }

    DeleteProductInCart(cartId : string ,productId : string)
    {
        return this.http.delete(environment.baseApiUrl + 'cart/deleteproduct/' + cartId + '/' + productId);
    }
}
