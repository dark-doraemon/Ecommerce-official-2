import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdminsearchService {

    constructor() { }

    adminSearch = new EventEmitter<string>();
}
