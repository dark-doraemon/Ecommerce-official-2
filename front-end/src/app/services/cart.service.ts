import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/Cart.model';
import { CartSanPham } from '../models/cartSanPham.model';

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

    ChangeQualityOfProductInCart(cartId : string ,productId :string,quantity : number)
    {
        return this.http.
        put(environment.baseApiUrl + 'cart/ChangeQuanlityOfProdut/' + cartId + '/' + productId + '/' + quantity,{
            cartId : cartId,
            maSanPham : productId,
            quantity : quantity
        });
    }

    AddProductIntoCartService(cartSanPham : CartSanPham)
    {
        return this.http.post<CartSanPham>(environment.baseApiUrl + 'cart/AddProductIntoCart',cartSanPham);
    }
}
