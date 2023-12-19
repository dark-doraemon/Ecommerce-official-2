import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
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
    
    productSearching : string = ''; //lấy product search từ thanh search ở header
    constructor(private productService: ProductService,private filterService : FilterService,private searchService : SearchProductsService) { 
       
        //filter theo giá
        this.filterService.filterByPrice.subscribe({
            next : (products : Product[]) =>{
                this.products = products;
            }
        })

        //filter theo brand
        this.filterService.filterByBrand.subscribe({
            next : brand => {
                this.products = brand;
            }
        })

        //filter theo category
        this.filterService.filterByCategory.subscribe({
            next : category => {
                console.log(category);
                this.products = category;
            }
        })

        
        this.searchService.searchProductText.subscribe({
            next : (search :string) =>{
                this.productSearching = search;
            }
        })
    }


    ngOnInit(): void {
        // this.GetProducts();// lấy các sản phẩm
        // dữ liệu được emit từ category component nên không cần getProducts ở đây nữa
        this.productService.products.subscribe({
            next : products => {
                this.products = products
                console.log(this.products);
            }
        })
    }

    GetProducts() {
        this.productService.GetProducts().subscribe({
            next: (products) => {
                this.products = products;
            },
            error: (error) => console.log(error)
            
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
    
    // FilterByPrice(priceLevel) {
    //     let filteredProducts : Product[] = [];
    //     // Lọc dữ liệu từ mảng products và gán vào filteredProducts

    //     if(priceLevel === 0 )
    //     {
    //         this.GetProducts();
    //         return;
    //     }
    //     if (priceLevel === 1) {
    //         filteredProducts = this.products.filter(product => product.giaSanPham < 5000000);
    //     } else if (priceLevel === 2) {
    //         filteredProducts = this.products.filter(product => product.giaSanPham >= 5000000 && product.giaSanPham <= 7000000);
    //     } else if (priceLevel === 3) {
    //         filteredProducts = this.products.filter(product => product.giaSanPham >= 7000000 && product.giaSanPham <= 10000000);
    //     } else if (priceLevel === 4) {
    //         filteredProducts = this.products.filter(product => product.giaSanPham > 10000000);
    //     } else {
    //         // Nếu không có mức giá nào được chọn, hiển thị tất cả sản phẩm
    //         filteredProducts = [...this.products];
    //     }
    //     this.products = filteredProducts
    //     console.log(this.products);
    // }

    



}
