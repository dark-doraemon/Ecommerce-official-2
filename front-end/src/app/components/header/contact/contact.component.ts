import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ThacmackhieunaiService } from 'src/app/services/thacmackhieunai.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    postModel : any = {}
    constructor(private thacMacKhieuNaiService : ThacmackhieunaiService,private toastr : ToastrService) {}


    PostThacMac()
    {
        this.thacMacKhieuNaiService.PostKhieuNai(this.postModel).subscribe({
            next :(success) =>{
                // console.log(success)
                this.toastr.success("Gửi khiếu nại thành công");
            },
            error : (errors) =>{
                console.log(errors);
            }
        })
    }
}

