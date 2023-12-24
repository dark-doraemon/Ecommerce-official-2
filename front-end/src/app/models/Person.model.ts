import { AccountRutGon } from "./accountRutGon.model";

export interface Person {
    personId: string;
    hoten: string | null;
    tuoi: number;
    gioitinh: number;
    cccd: string | null;
    sdt: string | null;
    diachi: string | null;
    email: string | null;
    taiKhoans : AccountRutGon[];
}