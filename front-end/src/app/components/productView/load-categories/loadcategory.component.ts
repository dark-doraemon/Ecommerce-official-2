import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/Brand.model';
import { Category } from 'src/app/models/Category.model';
import { Product } from 'src/app/models/Product.model';
import { Pagination } from 'src/app/models/pagination.model';
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

    categories : Category[] =[];
    brands : Brand[] = [];
    products : Product[] =[];

    categoriesSearch : string = '';
    brandsSearch : string ='';


    constructor(private categoryService : CategoryService, private brandServices : BrandService,
                private filterService : FilterService,
                private http : ProductService,
                private productService : ProductService) {}

    ngOnInit(): void {
        this.GetCategories();
        this.GetBrands();
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
        this.filterService.priceId.emit(price);
    }

    SelectCategory(category : Category)
    {
        //gán chữ trên thanh search category 
        this.categoriesSearch = category.tenLoaiSanPham;

        //emit categoryid 
        this.filterService.categoryId.emit(category.maLoaiSanPham);
    }

    SelectBrand(brand : Brand)
    {
        this.brandsSearch = brand.tenBrand;

        //emit brandi
        this.filterService.brandId.emit(brand.maBrand);

    }


}
