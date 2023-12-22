import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KhieuNai } from '../models/thacmac.model';

@Injectable({
    providedIn: 'root'
})
export class ThacmackhieunaiService {

    constructor(private http : HttpClient) { }

    PostKhieuNai(modelKhieuNai : any)
    {
        return this.http.post(environment.baseApiUrl + 'khieunai/postkieunai',modelKhieuNai);
    }

    GetKhieuNai()
    {
        return this.http.get<KhieuNai[]>(environment.baseApiUrl + 'khieunai');
    }

    DeleteKhieuNai(maKhieuNai : string)
    {
        return this.http.delete(environment.baseApiUrl + 'khieunai/deletekhieunai/' + maKhieuNai);
    }
}
