import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
    selector: 'app-product-item-row',
    templateUrl: './product-item-row.component.html',
    styleUrls: ['./product-item-row.component.scss']
})
export class ProductItemRowComponent {
    @Input() product: Product;
}
