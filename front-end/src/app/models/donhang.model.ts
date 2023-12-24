import { DatHangSanPham } from "./DatHangSanPham.model";
import { Person } from "./Person.model";

export interface DonHang{
    maDatHang : string,
    ngayDatHang : string,
    personId : string,
    datHangSanPhams : DatHangSanPham[]
    person : Person
}