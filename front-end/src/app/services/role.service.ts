import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor() { }

    checkRole()
    {
        const token : string = JSON.parse(localStorage.getItem('user')).token;
        const decode = jwtDecode(token);

        if(decode && decode.aud === 'ltkadmin')
        {
            return true;
        }
        return false
    }

}
