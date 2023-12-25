import { Component, OnInit } from '@angular/core';
import { KhachHang } from 'src/app/models/KhachHang.model';
import { KhachhangService } from 'src/app/services/khachhang.service';

@Component({
    selector: 'app-qlkhachhang',
    templateUrl: './qlkhachhang.component.html',
    styleUrls: ['./qlkhachhang.component.scss']
})
export class QlkhachhangComponent implements OnInit {

    constructor(private khachchangService : KhachhangService) {}

    khachhangs : KhachHang[]
    ngOnInit(): void {
        this.GetKhachHangs();
    }


    GetKhachHangs()
    {
        this.khachchangService.GetKhachHangs().subscribe({
            next : (khachhangs) =>{
                this.khachhangs = khachhangs
                console.log(khachhangs)
            }
        })
    }

}
