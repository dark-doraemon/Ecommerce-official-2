import { Person } from "./Person.model"
import { VaiTroNhanVien } from "./vaitronhanvien.model"

export interface NhanVien 
{
    maNhanVien : string
    ngayDuocTuyen : string
    maVaiTro : string,
    maNhanVienNavigation : Person
    maVaiTroNavigation : VaiTroNhanVien
}