import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { Pagination } from 'src/app/models/pagination.model';
import { FilterService } from 'src/app/services/filter.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchProductsService } from 'src/app/services/search-products.service';

@Component({
    selector: 'app-load-products',
    templateUrl: './load-products.component.html',
    styleUrls: ['./load-products.component.scss']
})
export class LoadProductsComponent implements OnInit {
    products: Product[] = [];
    gridShow: boolean = true;
    priceLevel : number = 0 ;
    chosenBrand : string ;//lấy brand từ laod category
    chosenCategory : string =''; // lấy category từ load category

    pagination : Pagination | undefined;
    pageNumber = 1;
    pageSize = 8;
    
    productSearching : string = ''; //lấy product search từ thanh search ở header
    constructor(private productService: ProductService,private filterService : FilterService,private searchService : SearchProductsService) { 
       
      
        this.filterService.priceId.subscribe({
            next : (priceLevel ) =>{
                this.SelectPrice(priceLevel);
            }
        })

        //filter theo brand
        this.filterService.brandId.subscribe({
            next : brand => {
                console.log(brand)
                this.SelectBrand(brand);
            }
        })

        //filter theo category
        this.filterService.categoryId.subscribe({
            next : (categoryId )=>{
                this.SelectCategory(categoryId);
                console.log(categoryId);
            }
        })

        //filter theo search 
        this.searchService.searchProductText.subscribe({
            next : (search :string) =>{
                this.productSearching = search;
            }
        })
    }

    SelectPrice(price : number)
    {
        let filteredProducts : Product[] = [];
        if(price === 0)
        {
            this.GetProducts();
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
        this.products = filteredProducts;
    }

    SelectCategory(categoryId : string)
    {

        this.GetProducts(categoryId);
        
    }

    SelectBrand(brandId : string)
    {
        this.GetProducts('',brandId);
    }


    ngOnInit(): void {
       
        this.GetProducts();
    }

    GetProducts(category? : string,brand? : string) {
        this.productService.GetProducts(this.pageNumber,this.pageSize,category,brand).subscribe({
            next: (response) => {

                if(response.results && response.pagination)
                {
                    this.products = response.results;
                    this.pagination = response.pagination;
                }
            },
        })
    }

    ShowProductByGrid() {
        this.gridShow = true;
    }


    ShowProductByRow() {
        this.gridShow = false;
    }


    SortProducts(event) {
        // console.log(event);
        // // Lấy phần tử select
        // const selectElement: HTMLSelectElement = event.target;

        // // Lấy thông tin về option được chọn
        // const selectedOption: HTMLOptionElement = selectElement.options[selectElement.selectedIndex];

        // Lấy value
        // const value = selectedOption.value;

        const selectTag = document.getElementById('mySelect') as HTMLSelectElement
        if (selectTag.value === 'increasing') 
        {
            this.IncreasingSort();
        }
        else if (selectTag.value === 'decreasing') 
        {
            this.DescreasingSort();
        }
        else if (selectTag.value === 'alphabet')
        {
            this.AlphabetSort();
        }
    }


    IncreasingSort() {
        this.products.sort((a, b) => {
            return a.giasanpham - b.giasanpham;
        });
    }

    DescreasingSort() {
        this.products.sort((a, b) => {
            return b.giasanpham - a.giasanpham;
        })
    }

    AlphabetSort() {
        this.products.sort((a, b) => {
            return a.tensanpham.localeCompare(b.tensanpham)
        })
    }
    
    pageChanged(event)
    {
        if(this.pageNumber !== event.page)
        {
            this.pageNumber = event.page;
            this.GetProducts();
        }
    }

    



}
