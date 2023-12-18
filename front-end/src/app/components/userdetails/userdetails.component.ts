import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
    selector: 'app-userdetails',
    templateUrl: './userdetails.component.html',
    styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
    hoso : boolean = true;

    account : any= {};

    constructor(private accountService : AccountService,private route :ActivatedRoute) {

    }
    ngOnInit(): void {
        const username = this.route.snapshot.params['username'];
        this.accountService.GetAccountByUsername(username).subscribe({
            next : (account) =>{
                this.account.hoten = account.hoten,
                this.account.tuoi = account.tuoi,
                this.account.gioitinh = account.gioitinh,
                this.account.sdt = account.sdt,
                this.account.diachi = account.diachi,
                this.account.email = account.email

            }
        })
    }

    select()
    {
        this.hoso = !this.hoso
    }

    SuaThongTin()
    {
        console.log(this.account);
    }
}
