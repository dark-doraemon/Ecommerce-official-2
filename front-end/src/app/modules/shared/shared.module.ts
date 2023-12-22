import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { RatingModule } from 'ngx-bootstrap/rating';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ToastrModule.forRoot({
            positionClass :'toast-bottom-right'
        }),
        PaginationModule.forRoot(),
        NgxSpinnerModule.forRoot({
            type : 'pacman'
        }),
        RatingModule.forRoot()
        
    ],
    exports :[
        ToastrModule,
        PaginationModule,
        NgxSpinnerModule,
        RatingModule
        
    ]
})
export class SharedModule { }
