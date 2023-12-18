import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchProductsService {

    constructor() { }
    searchProductText : EventEmitter<string> = new EventEmitter<string>();
}
