import { Component, OnInit } from '@angular/core';
import { KhieuNai } from 'src/app/models/thacmac.model';
import { RoleService } from 'src/app/services/role.service';
import { ThacmackhieunaiService } from 'src/app/services/thacmackhieunai.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor(private  thacMacKhieuNaiService : ThacmackhieunaiService,private roleService : RoleService) {}

    isAdmin : boolean = false;
    ngOnInit(): void {
        this.getKhieuNais()
        this.isAdmin = this.roleService.checkAdminRole()

    }

    thacMacKhieuNaisCount : number = 0;
    getKhieuNais()
    {
        this.thacMacKhieuNaiService.GetKhieuNai().subscribe({
            next : (khieunais : KhieuNai[]) =>{
                this.thacMacKhieuNaisCount = khieunais.length
            }
        })
    }

}
