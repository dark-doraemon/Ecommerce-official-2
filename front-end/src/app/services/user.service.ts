import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Person.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http : HttpClient) { }

    GetUserById(id : string)
    {
        return this.http.get<Person>(environment.baseApiUrl + 'users/' + id);
        // this.GetHttpOptions()
    }


    //xác thực người dùng bằng jwt trược khi làm gì đó(sử dụng interceptor để thay thế )
    // GetHttpOptions()
    // {
    //     const userString = localStorage.getItem('user');

    //     // if(!userString) return ;

    //     const user = JSON.parse(userString);
    //     return {
    //         headers : new HttpHeaders({
    //             Authorization: 'Bearer ' + user.token
    //         })
    //     }
    // }

    UpdateUser(user : Person,id : string)
    {
        return this.http.put(environment.baseApiUrl + 'users/update/' + id,user);
        // ,this.GetHttpOptions()
    }
}
