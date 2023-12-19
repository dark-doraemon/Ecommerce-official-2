import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router : Router,private toastrService : ToastrService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error : HttpErrorResponse) =>{
                if(error)
                {
                    switch(error.status)
                    {
                        case 400:
                            if(error.error.errors)
                            {
                                const modelSateError = [];
                                for(const key in error.error.errors)
                                {
                                    if(error.error.errors[key])
                                    {
                                        modelSateError.push(error.error.errors[key]);
                                    }
                                }
                                throw modelSateError.flat();
                            }
                            else
                            {
                                this.toastrService.error(error.error,error.status.toString())
                            }
                            break;
                        case 401:
                            this.toastrService.error('Tài khoản hoặc mật khẩu sai',error.status.toString())
                            break;
                        case 404 :
                            this.router.navigateByUrl('/not-found');
                            break;
                        case 500 :
                            const navigationExtras : NavigationExtras = {
                                state : {
                                    error : error.error
                                }
                            }
                            this.router.navigateByUrl('/home',navigationExtras);
                            break;
                        default : 
                            this.toastrService.error('Somthing unexpected went wrong');
                    }
                }
                throw error;
            })
        )
    }
}
