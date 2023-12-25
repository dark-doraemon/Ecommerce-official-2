import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KhachHang } from '../models/KhachHang.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class KhachhangService {

    constructor(private http : HttpClient) { }

    GetKhachHangs()
    {
        return this.http.get<KhachHang[]>(environment.baseApiUrl + 'khachhang');
    }
}
