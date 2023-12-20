import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Person } from 'src/app/models/Person.model';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-userdetails',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    hoso: boolean = true;

    user: any = {};

    maPerson : string = ''
    constructor(private route: ActivatedRoute, private userService: UserService,private toastr : ToastrService,
                private accountService : AccountService) {

    }
    ngOnInit(): void {

        //đầu tiên lấy mã person đã lưu khi đăng nhập
        this.accountService.currenUser$.pipe(take(1)).subscribe({
            next : (user) =>{
                this.maPerson = user.maPerson;
            }
        });

        //kiếm kiểm thông tin user theo mã person
        this.userService.GetUserById(this.maPerson).subscribe({
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
        
        this.userService.UpdateUser(this.user,this.maPerson).subscribe({
            next : (response) =>{
                // console.log(response);
                this.toastr.success("Update thành công");
            },
            error : error => console.log(error)
            
        })
    }
}
