import { Component, OnInit } from '@angular/core';
import { DonHang } from 'src/app/models/donhang.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { AdminComponent } from '../admin.component';
import { AdminsearchService } from 'src/app/services/adminsearch.service';
import { DatHangSanPham } from 'src/app/models/DatHangSanPham.model';

@Component({
    selector: 'app-qldonhang',
    templateUrl: './qldonhang.component.html',
    styleUrls: ['./qldonhang.component.scss']
})
export class QldonhangComponent implements OnInit {

    maDonHangSearchText : string = ''
    donHangs : DonHang[]
    constructor(private checkoutService : CheckoutService,private adminSearchService :AdminsearchService) {
        adminSearchService.adminSearch.subscribe({
            next : (search : string) => {
                this.maDonHangSearchText = search
            }
        })
    }
    ngOnInit(): void {
        this.GetAllDonHang();

    }

    GetAllDonHang()
    {
        this.checkoutService.GetDatHangsAll().subscribe({
            next : (donhang) =>{
                this.donHangs = donhang;
                console.log(donhang);
            }
        })
    }

    CaculateTongDonhang(sanphams : DatHangSanPham[] )
    {
        let total = 0;
        sanphams.forEach(sanpham =>{
            total += (sanpham.soLuong * sanpham.giaTien);
        })

        return total;
    }

    
}
