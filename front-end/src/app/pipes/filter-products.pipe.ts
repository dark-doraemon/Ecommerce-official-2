import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product.model';

@Pipe({
    name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

    transform(value: Product[], filterString?: any): any {
        if (value.length === 0 || filterString === '') {
            return value;
        }

        const products = [];
        for (const product of value) {
            if (product['tenSanPham'].toLowerCase().includes(filterString.toLowerCase())) {
                products.push(product);
            }
        }
        return products;
    }

}
