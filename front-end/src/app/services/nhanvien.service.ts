import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NhanVien } from '../models/NhanVien.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class NhanvienService {

    constructor(private http : HttpClient) { }


    GetNhanVien()
    {
        return this.http.get<NhanVien[]>(environment.baseApiUrl + 'nhanvien');
    }


    Register(registerForm : any)
    {
        return this.http.post<any>(environment.baseApiUrl + 'nhanvien',registerForm)
    }

    Update(nhanVienUpdate)
    {
        return this.http.put(environment.baseApiUrl + 'nhanvien/UpdateNhanVien/' + nhanVienUpdate.manhanvien ,nhanVienUpdate);  
    }
}
