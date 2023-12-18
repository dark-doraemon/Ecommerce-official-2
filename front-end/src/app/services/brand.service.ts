import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/Brand.model';

@Injectable({
    providedIn: 'root'
})
export class BrandService {

    constructor(private http: HttpClient) { }


    getBrands()
    {
        return this.http.get<Brand[]>(environment.baseApiUrl + 'brands');
    }
}
