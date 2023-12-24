import { Component } from '@angular/core';
import { AdminsearchService } from 'src/app/services/adminsearch.service';
import { SearchProductsService } from 'src/app/services/search-products.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    searchText : string = '';

    constructor(private adminSearchService : AdminsearchService) {}
    OnHandleSearch(event: Event) {
        this.searchText = (<HTMLInputElement>event.target).value;
        this.adminSearchService.adminSearch.emit(this.searchText);
    }
}
