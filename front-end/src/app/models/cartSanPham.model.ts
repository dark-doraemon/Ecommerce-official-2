import { Product } from "./Product.model";

export interface CartSanPham {
    cartId : string,
    maSanPham : string,
    soLuongSp : number,
    giaTien : number,
    maSanPhamNavigation : Product
}