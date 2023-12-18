import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    loggedIn = new EventEmitter<boolean>();
    constructor() { }
}
