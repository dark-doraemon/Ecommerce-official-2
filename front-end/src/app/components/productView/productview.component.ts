import { Component } from "@angular/core";

@Component({
    selector : 'app-product-view',
    templateUrl : './productview.component.html'
})
export class ProductViewComponent
{
    price : number;

    getPrice(eventPrice : number)
    {
        this.price = eventPrice;
    }
}