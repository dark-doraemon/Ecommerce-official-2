import { Product } from "./Product.model";

export interface CartSanPham {
    maSanPham : string,
    soLuongSp : number,
    giaTien : number,
    maSanPhamNavigation : Product
}