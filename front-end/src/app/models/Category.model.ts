import { Brand } from "./Brand.model";
import { Product } from "./Product.model";

export interface Category {
    maLoaiSanPham: string;
    tenLoaiSanPham: string | null;
    
}