import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { User } from './models/User';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'offical1';

    constructor(private accountService : AccountService)  {}

    
    ngOnInit(): void {
        this.setCurrentUser();
    }

    //khi chương trình khởi động thì sẽ set user có trong local storage
    setCurrentUser()
    {
        //kiểm user trong local storage 
        const userString  = (localStorage.getItem('user'));
        
        //nếu không có thì thôi
        if(!userString)
        {
            return ;
        }

        //nếu có user trong local storage thì chuyển nó thành JSON và lưu nó trong account service 
        const user : User = JSON.parse(userString);

        this.accountService.setCurrentUser(user);
    }
}
