import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DonHang } from '../models/donhang.model';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    constructor(private http : HttpClient) { }

    AddDatHang(peronId : string)
    {
        return this.http.get(environment.baseApiUrl + 'dathang/AddDatHang/' + peronId);
    }


    GetDatHangs(personId : string)
    {
        return this.http.get<DonHang[]>(environment.baseApiUrl + 'dathang/GetDatHangs/' + personId);
    }
}
