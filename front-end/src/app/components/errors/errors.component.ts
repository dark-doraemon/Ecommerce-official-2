import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-errors',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent  {
    constructor(private http : HttpClient) {}

    Get404Error()
    {
        this.http.get(environment.baseApiUrl + 'buggy/not-found').subscribe({
            next : reponse => console.log(reponse),
            error: errors => console.log(errors)
        })
    }


    Get400Error()
    {
        this.http.get(environment.baseApiUrl + 'buggy/bad-request').subscribe({
            next : reponse => console.log(reponse),
            error: errors => console.log(errors)
        })
    }

    Get500Error()
    {
        this.http.get(environment.baseApiUrl + 'buggy/server-error').subscribe({
            next : reponse => console.log(reponse),
            error: errors => console.log(errors)
        })
    }

    Get401Error()
    {
        this.http.get(environment.baseApiUrl + 'buggy/auth').subscribe({
            next : reponse => console.log(reponse),
            error: errors => console.log(errors)
        })
    }

    Get400ValidationError()
    {
        this.http.post(environment.baseApiUrl + 'account/register',{}).subscribe({
            next : reponse => console.log(reponse),
            error: errors => console.log(errors)
        })
    }
}
