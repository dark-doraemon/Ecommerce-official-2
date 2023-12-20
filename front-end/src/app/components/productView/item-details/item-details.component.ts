import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { CartSanPham } from 'src/app/models/cartSanPham.model';
import { AccountService } from 'src/app/services/account.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
    productDetails : Product;
    productId : string;
    cartId : string
    comments : any = {};
    constructor(private route : ActivatedRoute,
        private productService : ProductService,
        private cartService : CartService,
        private accountService : AccountService,
        private toastr : ToastrService) {
    }

    ngOnInit()
    {
        this.productId = this.route.snapshot.params['id'];
        this.productService.GetProductById(this.productId).subscribe({
            next : (productDetails : Product) =>{
                this.productDetails = productDetails;
                this.comments = productDetails.comments;
            }
        });
    }

    AddCart()
    {
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next : (user) =>{
                this.cartId = user.maCart;
            }
        })
        let cartProduct : any = {
            cartId : this.cartId,
            maSanPham : this.productId,
            soLuongSp : 1,
        }

        this.cartService.AddProductIntoCartService(cartProduct).subscribe({
            next : () =>{
                this.toastr.success("Thêm vào giỏ hàng thành công");
            },
            error : (errors) =>{
                this.toastr.error("Bạn chưa đăng nhập");
            }
        })
        console.log(cartProduct);
    }
}
