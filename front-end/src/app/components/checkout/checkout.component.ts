import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    user: any = {};

    maPerson: string = ''
    constructor(private route: ActivatedRoute, private userService: UserService, private toastr: ToastrService,
        private accountService: AccountService,private cartService : CartService,
        private checkoutService : CheckoutService,
        private toastrService : ToastrService,
        private router : Router) {

    }
    ngOnInit(): void {
        this.GetThongTinUser();
        this.GetProductInCart();
    }

    GetThongTinUser() {
        //đầu tiên lấy mã person đã lưu khi đăng nhập
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next: (user: User) => {
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
            }
        })
    }

    SuaThongTin() {

        this.userService.UpdateUser(this.user, this.maPerson).subscribe({
            next: (response) => {
                // console.log(response);
                this.toastr.success("Update thành công");
            },
            error: error => console.log(error)

        })
    }


    soLuongSanPham: number;
    cartId: string = '';
    productsCart: any;
    GetProductInCart() {
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next: (user) => {
                this.cartService.GetProductsInCart(user.maPerson).subscribe({
                    next: (products) => {
                        this.productsCart = (products.cartSanPhams);
                        this.cartId = products.maCart;
                    }
                })
            }
        })
    }

    totalPrice : string = '';
    CaculateTotal()
    {
       this.totalPrice =  this.productsCart.reduce((acc ,currentValue)=> 
       acc + currentValue.maSanPhamNavigation.giasanpham * currentValue.soLuongSp,0).toString();
       return this.totalPrice;
    }


    XacNhan()
    {
        if(this.user.hoten === '')
        {
            return ;
        }

        
        const peronId = JSON.parse(localStorage.getItem('user'));
        this.checkoutService.AddDatHang(peronId.maPerson).pipe(take(1)).subscribe({
            next : (response) =>{
                console.log(response);
                this.toastr.success("Đặt hàng thành công");
                this.router.navigateByUrl('/success');
            },
            error : (error) => {
                console.log(error);
                this.toastr.error("Bạn chưa để sản phẩm trong giỏ hàng");
            }
        })
    }


}
