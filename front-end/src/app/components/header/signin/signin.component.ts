import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';
import { LoggingService as LoginService } from 'src/app/services/logging.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    model : any = {};

    constructor(private accountService : AccountService,private toastr : ToastrService) {}

    
    Login()
    {
        this.accountService.login(this.model).subscribe({
            //nếu đăng nhập thành công
            next :(respone) =>{
                this.toastr.success("Đăng nhập thành công");
                this.accountService.accountModel.emit(this.model.username);
            },

            //nếu đăng nhập thất bại
            error : (errors) => {
                console.log(errors.error);
                this.toastr.error(errors.error)
            }
        });
    }
}
