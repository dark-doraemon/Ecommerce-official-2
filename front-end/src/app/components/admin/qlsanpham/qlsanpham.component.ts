import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-qlsanpham',
  templateUrl: './qlsanpham.component.html',
  styleUrls: ['./qlsanpham.component.scss']
})
export class QlsanphamComponent implements OnInit{

    products : Product[] 
    constructor(private productService : ProductService){}

    ngOnInit(): void {
        
    }
}
