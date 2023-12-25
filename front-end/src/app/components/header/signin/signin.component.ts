import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    taikhoan: any = {};
    errors : string[] = [];
    constructor(private accountService: AccountService, private toastr: ToastrService) { }


    Login() {
        this.accountService.login(this.taikhoan).subscribe({
            //nếu đăng nhập thành công
            next: (respone) => {
                console.log(respone);
                this.toastr.success("Đăng nhập thành công");
                this.accountService.accountModel.emit(this.taikhoan.username);
                const closeButton = document.querySelector('.btn-close') as HTMLElement;
                if (closeButton) {
                    closeButton.click();
                }
            },

            //nếu đăng nhập thất bại
            error: (errors) => {
                this.errors = errors;
                // console.log(errors);
                // this.toastr.error(errors)
            }
        });
    }
}
