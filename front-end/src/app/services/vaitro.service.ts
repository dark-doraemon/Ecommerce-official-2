import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VaiTroNhanVien } from '../models/vaitronhanvien.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VaitroService {

    constructor(private http : HttpClient) { }


    GetVaiTros()
    {
        return this.http.get<VaiTroNhanVien[]>(environment.baseApiUrl + 'nhanvien/GetVaiTros');
    }
}
