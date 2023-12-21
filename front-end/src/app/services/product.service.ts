import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product.model';
import { environment } from 'src/environments/environment';
import { PaginatedResult, Pagination } from '../models/pagination.model';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = new EventEmitter<Product[]>();
    pagination : EventEmitter<Pagination> = new EventEmitter<Pagination>();


    pagninatedResult : PaginatedResult<Product[]> = new PaginatedResult<Product[]>;
    constructor(private http : HttpClient) { }

    GetProducts(page? :number,itemsPerPage? : number)
    {
        let params = new HttpParams() //params để gửi truy vấn 
        if(page && itemsPerPage)
        {
            params = params.append("pageNumber",page);
            params = params.append("pageSize",itemsPerPage);
        }
        return this.http.get<Product[]>(environment.baseApiUrl + 'products',{observe : 'response',params}).pipe(
            map( response => {
                if(response.body)
                {
                    this.pagninatedResult.results = response.body
                }

                //lấy dữ liệu của header có tên là Pagination
                const pagination = response.headers.get('Pagination');

                if(pagination)
                {
                    //sao đó parse dữ liệu đó ra
                    this.pagninatedResult.pagination = JSON.parse(pagination);
                }

                return this.pagninatedResult;
            })
        );
    }

    GetProductById(id : string)
    {
        return this.http.get<Product>(environment.baseApiUrl + 'products/' + id);
    }
}
