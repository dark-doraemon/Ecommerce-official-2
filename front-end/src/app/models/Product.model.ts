import { Brand } from "./Brand.model";
import { Category } from "./Category.model";
import { CommentDTO } from "./Comment.model";
import { TinhTrangSanPham } from "./TinhTrangSanPham.model";

export interface Product {
    masanpham: string;
    tensanpham: string ;
    giasanpham: number ;
    motasanpham: string;
    soluong: number;
    hinhanhsanpham: string ;
    maTinhTrang: string;
    maBrandNavigation: Brand;
    maLoaiSanPhamNavigation: Category;
    maTinhTrangNavigation : TinhTrangSanPham;
    comments : CommentDTO;
}