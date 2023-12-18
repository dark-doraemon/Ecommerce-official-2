import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/User';

import { AccountService } from 'src/app/services/account.service';
import { SearchProductsService } from 'src/app/services/search-products.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currentUser$ : Observable<User | null> = of(null);
    // loggedIn : boolean;
    username : string;
     
    
    searchProductText: string;

    constructor(private searchService: SearchProductsService,
                private accountService : AccountService) {

        this.accountService.accountModel.subscribe({
            next :(username : string) =>{
                this.username = username
            }
        })
    }

    //khi header được khỏi động thì sẽ kiểm tra có user đã lấy từ app.component chưa
    ngOnInit(): void {
        this.currentUser$ = this.accountService.currenUser$
        
        // this.getCurrentUser();
    }

    // getCurrentUser()
    // {
    //     //lấy user đã lưu trong accountService 
    //     this.accountService.currenUser$.subscribe({
    //         next : (user ) => {
    //             //loggedIn dúng nếu có user và ngược lại
    //             this.username = user.username
    //             this.loggedIn = !!user
    //         } 
    //     })
    // }

    OnHandleSearch(event: Event) {
        this.searchProductText = (<HTMLInputElement>event.target).value;
        this.searchService.searchProductText.emit(this.searchProductText);
    }


    Logout()
    {
        //sẽ logout trong serivce
        this.accountService.Logout();

        //set trang thái để thay đổi template
        // this.loggedIn = false;
    }
}
