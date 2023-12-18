import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../models/account.model';
@Injectable({
    providedIn: 'root'
})
export class AccountService {

    private currentUserSource = new BehaviorSubject<User | null>(null);
    currenUser$ = this.currentUserSource.asObservable();

    constructor(private http : HttpClient) { }

    accountModel = new EventEmitter<string>();

    login(model : any)
    {
        return this.http.post<User>(environment.baseApiUrl + 'account/login',model).pipe(
            map((respone ) =>{
                const user =respone;
                if(user)
                {
                    this.currentUserSource.next(user);
                    localStorage.setItem("user",JSON.stringify(user));
                }
            } )
        )
    }

    //hàm này sẽ set user lấy từ local storage và lưu vào biến currentUserSource
    setCurrentUser(user : User)
    {
        this.currentUserSource.next(user);
    }

    Logout()
    {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }

    Register(registerForm : any)
    {
        return this.http.post<User>(environment.baseApiUrl + 'account/register',registerForm).pipe(
            map( user => {
                if(user)
                {
                    //khi người dùng đăng kí thì lưu trong local storage luôn, tức là đăng nhập sao khi đăng kí luôn
                    localStorage.setItem('user',JSON.stringify(user));
                    this.currentUserSource.next(user);
                }

                
                //sau khi post lên thì trả về token 
                return user
            })
        )
    }

    GetAccountByUsername(username : string)
    {
        return this.http.get<Account>(environment.baseApiUrl + 'account/' + username);
    }
}
