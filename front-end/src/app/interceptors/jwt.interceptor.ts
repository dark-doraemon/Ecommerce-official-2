import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private accountService : AccountService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        //take 1 nghĩa là chỉ subscribe 1 lần và chúng ta không cần unsubscribe
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next : (user) =>{
                if(user) 
                {
                    //nếu mà có user thì thêm header có jwt vào request 
                    request = request.clone({
                        setHeaders : {
                            Authorization: `Bearer ${user.token}`
                        }
                    });
                }
            }
        })
        return next.handle(request);
    }
}
