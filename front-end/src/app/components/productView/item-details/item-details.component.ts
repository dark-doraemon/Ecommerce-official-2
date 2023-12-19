import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
    productDetails : Product;
    id : string;
    comments : any = {};
    constructor(private route : ActivatedRoute,private productService : ProductService) {
    }

    ngOnInit()
    {
        this.id = this.route.snapshot.params['id'];
        this.productService.GetProductById(this.id).subscribe({
            next : (productDetails : Product) =>{
                this.productDetails = productDetails;
                this.comments = productDetails.comments;
            }
        });
    }
}
