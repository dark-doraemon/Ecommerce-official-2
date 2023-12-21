import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    constructor(private http : HttpClient) { }

    AddDatHang(peronId : string)
    {
        return this.http.get(environment.baseApiUrl + 'dathang/' + peronId);
    }
}
