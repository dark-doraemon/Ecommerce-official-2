import { DatHangSanPham } from "./DatHangSanPham.model";

export interface DonHang{
    maDatHang : string,
    ngayDatHang : string,
    personId : string,
    datHangSanPhams : DatHangSanPham[]
}