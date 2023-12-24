import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TinhTrangSanPham } from '../models/TinhTrangSanPham.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TinhtrangsanphamService {

    constructor(private http : HttpClient) { }

    GetTinhTrangs()
    {
        return this.http.get<TinhTrangSanPham[]>(environment.baseApiUrl + 'tinhtrang');
    }
}
