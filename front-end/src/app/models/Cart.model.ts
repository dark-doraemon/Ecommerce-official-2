import { CartSanPham } from "./cartSanPham.model";

export interface Cart {
    maCart : string,
    personId : string,
    cartSanPhams : CartSanPham
}