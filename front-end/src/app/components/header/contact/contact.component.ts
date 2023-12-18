import { Component } from '@angular/core';
import { ThacmackhieunaiService } from 'src/app/services/thacmackhieunai.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    postModel : any = {}
    constructor(private thacMacKhieuNaiService : ThacmackhieunaiService) {}
    PostThacMac()
    {
        this.thacMacKhieuNaiService.PostKhieuNai(this.postModel).subscribe({
            next :(success) =>{
                console.log(success)
            },
            error : (errors) =>{
                console.log(errors);
            }
        })
    }
}
