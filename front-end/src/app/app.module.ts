import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/header/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { LoadcategoryComponent } from './components/productView/load-categories/loadcategory.component';
import { LoadProductsComponent } from './components/productView/load-products/load-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductViewComponent } from './components/productView/productview.component';
import { SigninComponent } from './components/header/signin/signin.component';
import { SignupComponent } from './components/header/signup/signup.component';
import { ProductItemComponent } from './components/productView/load-products/product-item/product-item.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductItemRowComponent } from './components/productView/load-products/product-item-row/product-item-row.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter-categories.pipe';
import { FilterBrandsPipe } from './pipes/filter-brands.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ItemDetailsComponent } from './components/productView/item-details/item-details.component';
import { QlsanphamComponent } from './components/admin/qlsanpham/qlsanpham.component';
import { QlkhachhangComponent } from './components/admin/qlkhachhang/qlkhachhang.component';
import { QlnhanvienComponent } from './components/admin/qlnhanvien/qlnhanvien.component';
import { QldonhangComponent } from './components/admin/qldonhang/qldonhang.component';
import { SearchComponent } from './components/admin/search/search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from './modules/shared/shared.module';
import { ErrorsComponent } from './components/errors/errors.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ThacmackhieunaiComponent } from './components/admin/thacmackhieunai/thacmackhieunai.component';
import { MadonhangPipe } from './pipes/madonhang.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ContactComponent,
        LoadcategoryComponent,
        LoadProductsComponent,
        FooterComponent,
        MainComponent,
        NotFoundComponent,
        ProductViewComponent,
        SigninComponent,
        SignupComponent,
        ProductItemComponent,
        AdminComponent,
        CartComponent,
        ProductItemRowComponent,
        FilterPipe,
        FilterBrandsPipe,
        FilterProductsPipe,
        ItemDetailsComponent,
        QlsanphamComponent,
        QlkhachhangComponent,
        QlnhanvienComponent,
        QldonhangComponent,
        SearchComponent,
        UserProfileComponent,
        ErrorsComponent,
        ServerErrorComponent,
        CheckoutComponent,
        SuccessComponent,
        ThacmackhieunaiComponent,
        MadonhangPipe

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RatingModule.forRoot(), //tạo 1 share module cho gọn
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
