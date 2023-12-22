import { Product } from "./Product.model";

export interface DatHangSanPham {
    maDatHang : string,
    maSanPham : string,
    soLuong : number,
    giaTien : number,
    tongTien : number,
    maSanPhamNavigation : Product
}