import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/Person.model';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-userdetails',
    templateUrl: './userdetails.component.html',
    styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
    hoso: boolean = true;

    user: any = {};

    constructor(private route: ActivatedRoute, private userService: UserService,private toastr : ToastrService) {

    }
    ngOnInit(): void {
        const username = this.route.snapshot.params['username'];
        this.userService.GetUserById(username).subscribe({
            next: (user) => {
                this.user.hoten = user.hoTen,
                this.user.tuoi = user.tuoi,
                this.user.gioitinh = user.gioiTinh,
                this.user.sdt = user.sdt,
                this.user.diachi = user.diaChi,
                this.user.email = user.email
            }
        })
    }

    select() {
        this.hoso = !this.hoso
    }

    SuaThongTin() {
        console.log(this.user);
        const username = this.route.snapshot.params['username'];
        
        this.userService.UpdateUser(this.user,username).subscribe({
            next : (response) =>{
                // console.log(response);
                this.toastr.success("Update thành công");
            },
            error : error => console.log(error)
            
        })
    }
}
