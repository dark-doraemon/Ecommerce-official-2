import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(private http : HttpClient) { }


    AddComment(noiDungComment ,productId: string,personId : string)
    {
        return this.http.post(environment.baseApiUrl + 'comment/AddComment/' + productId + '/' + personId,noiDungComment );
    }
}
