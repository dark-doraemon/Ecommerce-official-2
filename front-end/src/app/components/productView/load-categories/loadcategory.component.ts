import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/Brand.model';
import { Category } from 'src/app/models/Category.model';
import { Product } from 'src/app/models/Product.model';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { FilterService } from 'src/app/services/filter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-load-category',
    templateUrl: './loadcategory.component.html',
    styleUrls: ['./loadcategory.component.scss']
})
export class LoadcategoryComponent implements OnInit{

    categories : Category[];
    brands : Brand[];
    products : Product[];
    categoriesSearch : string = '';
    brandsSearch : string ='';

    constructor(private categoryService : CategoryService, private brandServices : BrandService,
                private filterService : FilterService,
                private http : ProductService,
                private productService : ProductService) {}

    ngOnInit(): void {
        this.GetCategories();
        this.GetBrands();
        this.GetProducts();
    }

    GetProducts() {
        this.productService.GetProducts().subscribe({
            next: (products) => {
                this.products = products;
                this.productService.products.emit(products);
            },
            error: (error) => console.log(error)
            
        })
    }
    GetCategories()
    {
        this.categoryService.getCategories().subscribe({
            next : (categories) =>{
                this.categories = categories
            },
            error : error => console.log(error)
        })
    }

    GetBrands()
    {
        this.brandServices.getBrands().subscribe({
            next : (brands) =>{
                this.brands = brands
            },
            error : error => console.log(error)

        })
    }


    SelectPrice(price : number)
    {
        let filteredProducts : Product[] = [];
        if(price === 0)
        {
            filteredProducts = this.products;
        }
        else if (price === 1) {
            filteredProducts = this.products.filter(product => product.giasanpham < 5000000);
        } 
        else if (price === 2) {
            filteredProducts = this.products.filter(product => product.giasanpham >= 5000000 && product.giasanpham <= 7000000);
        } 
        else if (price === 3) {
            filteredProducts = this.products.filter(product => product.giasanpham >= 7000000 && product.giasanpham <= 10000000);
        } 
        else if (price === 4) {
            filteredProducts = this.products.filter(product => product.giasanpham > 10000000);
        } 

        this.filterService.filterByPrice.emit(filteredProducts);
    }

    SelectCategory(category : Category)
    {
        //gán chữ trên thanh search category 
        this.categoriesSearch = category.tenLoaiSanPham;

        //emit sản phẩm đã lọc theo category
        let filterProducts : Product[] = [];
        filterProducts = this.products.filter(product => product.maLoaiSanPhamNavigation.maLoaiSanPham === category.maLoaiSanPham);
        this.filterService.filterByCategory.emit(filterProducts);
    }

    SelectBrand(brand : Brand)
    {
        this.brandsSearch = brand.tenBrand;
        console.log(brand.maBrand);
        //emit sản phẩm đã lọc theo brand
        let filterProducts : Product[] = [];
        filterProducts = this.products.filter(product => product.maBrandNavigation.maBrand === brand.maBrand);
        this.filterService.filterByCategory.emit(filterProducts);

    }


}
