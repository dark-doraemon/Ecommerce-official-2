import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    nhanVienFormGroupArray : FormGroup[]
    constructor(private nhanVienService : NhanvienService,private vaitroService : VaitroService,private toastr : ToastrService,
                private accountService : AccountService,
                private fb: FormBuilder,){}


    ngOnInit(): void {
        this.GetNhanViens()
        this.GetVaiTro();
    }

    GetNhanViens()
    {
        this.nhanVienService.GetNhanVien().subscribe({
            next : (nhanviens ) =>{
                this.nhanViens = nhanviens;
                this.nhanVienFormGroupArray = this.nhanViens.map(nhanvien => {
                    return this.CreateFormGroup(nhanvien);
                })
                console.log(this.nhanVienFormGroupArray)
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


    CreateFormGroup(nhanVien : NhanVien) {
        return this.fb.group({
            manhanvien : [nhanVien.maNhanVien,Validators.required],
            tennhanvien : [nhanVien.maNhanVienNavigation.hoten,Validators.required],
            tuoi : [nhanVien.maNhanVienNavigation.tuoi,Validators.required],
            gioitinh : [nhanVien.maNhanVienNavigation.gioitinh,Validators.required],
            sdt : [nhanVien.maNhanVienNavigation.sdt,Validators.required],
            diachi : [nhanVien.maNhanVienNavigation.diachi,Validators.required],
            email : [nhanVien.maNhanVienNavigation.email,Validators.required],
                vaitro : [nhanVien.maVaiTro,Validators.required],
            username : [nhanVien.maNhanVienNavigation.taiKhoans[0].username,Validators.required],
            password : [nhanVien.maNhanVienNavigation.taiKhoans[0].password,Validators.required],
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

    UpdateNhanVien(nhanVien)
    {
        const nhanVienRawValue = nhanVien.getRawValue();
        let newNhanVien = {
            manhanvien : nhanVienRawValue.manhanvien,
            hoten : nhanVienRawValue.tennhanvien,
            tuoi : nhanVienRawValue.tuoi,
            gioitinh : nhanVienRawValue.gioitinh,
            sdt : nhanVienRawValue.sdt,
            diachi : nhanVienRawValue.diachi,
            email : nhanVienRawValue.email,
            mavaitro : nhanVienRawValue.vaitro,
            username : nhanVienRawValue.username,
            password : nhanVienRawValue.password
        }
        this.nhanVienService.Update(newNhanVien).subscribe({
            next : () =>{
                this.toastr.success("Sửa thành công");
            },
            error : (error) => console.log(error)
        })
    }


}
