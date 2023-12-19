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
    model: any = {};
    errors : string[] = [];
    constructor(private accountService: AccountService, private toastr: ToastrService) { }


    Login() {
        this.accountService.login(this.model).subscribe({
            //nếu đăng nhập thành công
            next: (respone) => {
                this.toastr.success("Đăng nhập thành công");
                this.accountService.accountModel.emit(this.model.username);

                const closeButton = document.querySelector('.btn-close') as HTMLElement;
                if (closeButton) {
                    closeButton.click();
                }
            },

            //nếu đăng nhập thất bại
            error: (errors) => {
                this.errors = errors;
                console.log(errors);
                // this.toastr.error(errors)
            }
        });
    }
}
