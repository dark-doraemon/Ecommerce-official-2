import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { DatHangSanPham } from 'src/app/models/DatHangSanPham.model';
import { Person } from 'src/app/models/Person.model';
import { DonHang } from 'src/app/models/donhang.model';
import { AccountService } from 'src/app/services/account.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-userdetails',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    hoso: boolean = true;

    user: any = {};

    maPerson: string = ''
    constructor(private route: ActivatedRoute, private userService: UserService, private toastr: ToastrService,
        private accountService: AccountService,
        private checkoutServcie: CheckoutService) {

    }
    ngOnInit(): void {

        //đầu tiên lấy mã person đã lưu khi đăng nhập
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next: (user) => {
                this.maPerson = user.maPerson;
            }
        });

        //kiếm kiểm thông tin user theo mã person
        this.userService.GetUserById(this.maPerson).subscribe({
            next: (user) => {
                this.user.hoten = user.hoten,
                    this.user.tuoi = user.tuoi,
                    this.user.gioitinh = user.gioitinh,
                    this.user.sdt = user.sdt,
                    this.user.diachi = user.diachi,
                    this.user.email = user.email
                    console.log(user)
            }
        })
    }


    donHangs: DonHang[] = [];

    SelectTaiKhoan() {
        this.hoso = true;
    }

    SelectCacDonDatHang() {
        this.hoso = false;

        if (this.hoso === false) {
            this.LoadDatHangs();
        }
    }

    SuaThongTin() {
        console.log(this.user);

        this.userService.UpdateUser(this.user, this.maPerson).subscribe({
            next: (response) => {
                // console.log(response);
                this.toastr.success("Update thành công");
            },
            error: error => console.log(error)

        })
    }


    LoadDatHangs() {
        this.checkoutServcie.GetDatHangsByPeronId(this.maPerson).subscribe({
            next: (response) => {
                this.donHangs = response;
                console.log(response);

            }
        })
    }

    CaculateTongDonhang(sanphams: DatHangSanPham[]) {
        let total = 0;
        sanphams.forEach(sanpham => {
            total += (sanpham.soLuong * sanpham.giaTien);
        })

        return total;
    }
}
