import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { KhieuNai } from 'src/app/models/thacmac.model';
import { ThacmackhieunaiService } from 'src/app/services/thacmackhieunai.service';

@Component({
    selector: 'app-thacmackhieunai',
    templateUrl: './thacmackhieunai.component.html',
    styleUrls: ['./thacmackhieunai.component.scss']
})
export class ThacmackhieunaiComponent implements OnInit {

    @Input()  thacMacKhieuNais : KhieuNai[];

    constructor(private thacMacKhieuNaiService : ThacmackhieunaiService,private toastr : ToastrService) {}
    
    ngOnInit(): void {
        this.getKhieuNais();
    }

    getKhieuNais()
    {
        this.thacMacKhieuNaiService.GetKhieuNai().subscribe({
            next : (khieunais : KhieuNai[]) =>{
                this.thacMacKhieuNais = khieunais;
                console.log(khieunais)
            }
        })
    }

    XoaThacMacKhieuNai(maKhieuNai : string,index : number)
    {
        this.thacMacKhieuNaiService.DeleteKhieuNai(maKhieuNai).subscribe({
            next : () =>{
                this.thacMacKhieuNais.splice(index,1);
                this.toastr.success("Xóa thành công");
            },
            error : (error) =>{
            }
        })
    }

}
