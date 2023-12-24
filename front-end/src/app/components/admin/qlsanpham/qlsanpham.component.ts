import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product.model';
import { Pagination } from 'src/app/models/pagination.model';
import { AdminsearchService } from 'src/app/services/adminsearch.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
    selector: 'app-qlsanpham',
    templateUrl: './qlsanpham.component.html',
    styleUrls: ['./qlsanpham.component.scss']
})
export class QlsanphamComponent implements OnInit {

    products: Product[]

    productsFiltered: string = '';
    formGroupArray: FormGroup[] = [];
    productFormArray  = new FormArray([])

    constructor(private productService: ProductService,
        private toastrService: ToastrService,
        private adminSearchService: AdminsearchService,
        private fb: FormBuilder) {
        this.adminSearchService.adminSearch.subscribe({
            next: (search) => {
                this.productsFiltered = search;
            }
        })

    }

    ngOnInit(): void {
        this.GetProducts();
    }

    pagination: Pagination | undefined;//chứ các thong tin của phân trang
    pageNumber = 1;
    pageSize = 8;


    GetProducts(category?: string, brand?: string) {
        this.productService.GetProducts(this.pageNumber, this.pageSize, category, brand).subscribe({
            next: (response) => {

                if (response.results && response.pagination) {
                    this.products = response.results;
                    this.pagination = response.pagination;

                    this.formGroupArray = this.products.map( product =>{
                        return this.createFormGroup(product)
                    });

                    this.formGroupArray.forEach(formGroup => this.productFormArray.push(formGroup))
                    console.log(this.productFormArray)
                    console.log()
                }
            },
        })
    }

    createFormGroup(product: Product): FormGroup {
        return this.fb.group({
            masanpham: [{value :product.masanpham,disabled : true}, Validators.required],
            tensanpham: [product.tensanpham, Validators.required],
            giasanpham: [product.giasanpham, Validators.required],
            motasanpham: [product.motasanpham, Validators.required],
            soluong: [product.soluong, Validators.required],
            hinhanhsanpham: [product.hinhanhsanpham, Validators.required],
            maTinhTrang: [{value : product.maTinhTrangNavigation.maTinhTrang,disabled : true}, Validators.required],
            maloaisanpham :[{value : product.maLoaiSanPhamNavigation.maLoaiSanPham,disabled : true}, Validators.required],
            loaisanpham : [{value : product.maLoaiSanPhamNavigation.tenLoaiSanPham,disabled : true},Validators.required],
            mabrand  :[{value : product.maBrandNavigation.maBrand,disabled : true}, Validators.required],
            brand : [{value : product.maBrandNavigation.tenBrand,disabled : true},Validators.required],
        });
        // const group = new FormGroup({
        //     masanpham : new FormControl(product.masanpham),
        //     tensanpham : new FormControl(product.tensanpham),
        //     giasanpham : new FormControl(product.giasanpham),
        //     motasanphan : new FormControl(product.motasanpham),
        //     soluong : new FormControl(product.soluong),
        //     hinhanhsanpham : new FormControl(product.hinhanhsanpham),
        //     maTinhTrang : new FormControl(product.maTinhTrangNavigation.maTinhTrang),
        //     maloaisanpham : new FormControl(product.maLoaiSanPhamNavigation.maLoaiSanPham),
        //     loaisanpham : new FormControl(product.maLoaiSanPhamNavigation.tenLoaiSanPham),
        //     mabrand : new FormControl(product.maBrandNavigation.maBrand),
        //     brand : new FormControl(product.maBrandNavigation.tenBrand)
        // })
        // return group;
    }
    pageChanged(event) {
        if (this.pageNumber !== event.page) {
            this.pageNumber = event.page;
            this.GetProducts();
        }
    }


    SuaSanPham(productFormGroup) {
        
        const rawValues = productFormGroup.getRawValue();
        let product : any = {
            masanpham : rawValues.masanpham,
            tensanpham : rawValues.tensanpham,
            giasanpham : rawValues.giasanpham,
            motasanpham : rawValues.motasanpham,
            soluong : rawValues.soluong,
            hinhanhsanpham : rawValues.hinhanhsanpham,
            matinhtrang : rawValues.maTinhTrang,
            mabrand : rawValues.mabrand,
            maloaisanpham : rawValues.maloaisanpham
        }
        console.log(product);
        this.productService.UpdateProduct(product).subscribe({
            next : (productResponse) =>{
                this.toastrService.success("Update thành công");
            },
            error : (error) =>{
                console.log(error);
            }
        })

    }


}
