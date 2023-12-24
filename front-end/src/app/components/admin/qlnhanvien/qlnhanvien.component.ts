import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NhanVien } from 'src/app/models/NhanVien.model';
import { VaiTroNhanVien } from 'src/app/models/vaitronhanvien.model';
import { AccountService } from 'src/app/services/account.service';
import { NhanvienService } from 'src/app/services/nhanvien.service';
import { VaitroService } from 'src/app/services/vaitro.service';

@Component({
    selector: 'app-qlnhanvien',
    templateUrl: './qlnhanvien.component.html',
    styleUrls: ['./qlnhanvien.component.scss']
})
export class QlnhanvienComponent implements OnInit{

    nhanViens : NhanVien[];
    vaitros : VaiTroNhanVien[];
    nhanVienToAdd : any = {}

    constructor(private nhanVienService : NhanvienService,private vaitroService : VaitroService,private toastr : ToastrService,
                private accountService : AccountService){}


    ngOnInit(): void {
        this.GetNhanViens()
        this.GetVaiTro();
    }

    GetNhanViens()
    {
        this.nhanVienService.GetNhanVien().subscribe({
            next : (nhanviens ) =>{
                this.nhanViens = nhanviens;
            }
        })
    }

    GetVaiTro()
    {
        this.vaitroService.GetVaiTros().subscribe({
            next : (vaitro) => {
                this.vaitros = vaitro

            }
        })
    }
    AddNhanVien()
    {
        console.log(this.nhanVienToAdd)
        if(this.nhanVienToAdd.password !== this.nhanVienToAdd.confirm)
        {
            this.toastr.error("Mật khẩu không giống");
        }
        else
        {
            this.nhanVienService.Register(this.nhanVienToAdd).subscribe({
                next : (response) => {
                    this.toastr.success("Thêm thành công");
                },
                error : (error) =>console.log(error)
            })
        }
    }

}
