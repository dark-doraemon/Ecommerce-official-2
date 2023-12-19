import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

    formRegister : any = {};
    errors : string[] = [];
    constructor(private accountService : AccountService,private toastr : ToastrService){}
    
    Register(){
        this.accountService.Register(this.formRegister).subscribe({
            next : response => {
                // console.log(response);
                this.toastr.success("Đăng kí thành công");
                const closeButton = document.querySelector('.btn-close') as HTMLElement;
                if (closeButton) {
                    closeButton.click();
                }
            },
            error : errors => {
                this.errors = errors;
                // this.toastr.error(errors.error);
                console.log(errors)
            }
        })
    }
}
