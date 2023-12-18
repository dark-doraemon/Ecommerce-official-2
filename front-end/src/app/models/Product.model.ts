import { TinhTrangNavigation } from "./TinhTrangSanPham.model";

export interface Product {
    maSanPham: string;
    tenSanPham: string | null;
    giaSanPham: number ;
    moTaSanPham: string | null;
    soLuong: number;
    hinhAnhSanPham: string | null;
    maTinhTrang: string;
    maBrand: string;
    maLoaiSanPham: string;
    maTinhTrangNavigation : TinhTrangNavigation;
}