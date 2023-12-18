import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ThacmackhieunaiService {

    constructor(private http : HttpClient) { }

    PostKhieuNai(modelKhieuNai : any)
    {
        return this.http.post(environment.baseApiUrl + 'khieunai/postkieunai',modelKhieuNai);
    }
}
