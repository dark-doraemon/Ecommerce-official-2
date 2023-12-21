import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './components/productView/productview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/header/home/home.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { ItemDetailsComponent } from './components/productView/item-details/item-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { QlsanphamComponent } from './components/admin/qlsanpham/qlsanpham.component';
import { QlkhachhangComponent } from './components/admin/qlkhachhang/qlkhachhang.component';
import { QlnhanvienComponent } from './components/admin/qlnhanvien/qlnhanvien.component';
import { QldonhangComponent } from './components/admin/qldonhang/qldonhang.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { authGuard } from './guards/auth.guard';
import { ErrorsComponent } from './components/errors/errors.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'home', component: HomeComponent },

    {
        path: 'productView', component: ProductViewComponent
    },

    { path: 'cart', component: CartComponent, canActivate: [authGuard] },
    { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [authGuard] },

    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'qlsanpham', component: QlsanphamComponent },
            { path: 'qlnhanvien', component: QlnhanvienComponent },
            { path: 'qlkhachhang', component: QlkhachhangComponent },
            { path: 'qldonhang', component: QldonhangComponent }
        ], canActivate: [authGuard]
    },

    { path: 'errors', component: ErrorsComponent },


    { path: 'productView/product-details/:id', component: ItemDetailsComponent },

    { path: 'contact', component: ContactComponent },

    { path: 'not-found', component: NotFoundComponent },
    { path : 'success', component : SuccessComponent},
    { path: 'server-error', component: ServerErrorComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
