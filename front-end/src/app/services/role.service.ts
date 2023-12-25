import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor() { }

    checkAdminAndNhanVienRole()
    {
        const token : string = JSON.parse(localStorage.getItem('user')).token;
        const decode = jwtDecode(token);

        if(decode && (decode.aud === 'ltkadmin' || decode.aud === 'ltknhanvien'))
        {
            return true;
        }
        return false
    }

    checkAdminRole()
    {
        const token : string = JSON.parse(localStorage.getItem('user')).token;
        const decode = jwtDecode(token);

        if(decode && (decode.aud === 'ltkadmin' ))
        {
            return true;
        }
        return false
    }

}
