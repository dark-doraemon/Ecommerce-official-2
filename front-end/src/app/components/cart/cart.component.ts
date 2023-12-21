import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { CartSanPham } from 'src/app/models/cartSanPham.model';
import { AccountService } from 'src/app/services/account.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    

    soLuongSanPham :number ;
    cartId : string = '';
    productsCart : any ;
    constructor(private cartService : CartService,private accountService : AccountService,private toastr : ToastrService) {}
    ngOnInit(): void {
       this.GetProductInCart();
    }

    GetProductInCart()
    {
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next : (user) =>{
                this.cartService.GetProductsInCart(user.maPerson).subscribe({
                    next : (products ) => {
                        this.productsCart = (products.cartSanPhams);
                        this.cartId = products.maCart;
                    }
                })
            }
        })
    }

    Increase(maSanPham : string ,soLuong : number,index : number)
    {
        soLuong +=1;
        this.cartService.ChangeQualityOfProductInCart(this.cartId,maSanPham,soLuong).subscribe({
            next : (respone) =>{
                this.productsCart[index].soLuongSp = soLuong
            }
        })
    }

    Derease(maSanPham : string ,soLuong : number,index : number)
    {
        if(soLuong <= 1) soLuong = 1;
        else soLuong -= 1;
        this.cartService.ChangeQualityOfProductInCart(this.cartId,maSanPham,soLuong).subscribe({
            next : (respone) =>{
                this.productsCart[index].soLuongSp = soLuong
            }
        })
    }

    Delete(maSanPham : string,index : number)
    {
        this.cartService.DeleteProductInCart(this.cartId,maSanPham).subscribe({
            next : (respone) => {
                this.toastr.success("Xóa thành công");
                this.productsCart.splice(index,1);
            },

            error : errors =>{

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
}
