import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { RoleService } from '../services/role.service';

export const adminAndNhanVien: CanActivateFn = (route, state) => {

    const accountService = inject(AccountService);
    const toast = inject(ToastrService);
    const roleService = inject(RoleService);


    //kiểm tra có currenUser$ không 
    return accountService.currenUser$.pipe(
        map(user => {


            if(user && roleService.checkAdminAndNhanVienRole())
            {
                return true;
            }
            else 
            {
                toast.error('Bạn không được phép sử dụng tính năng này');
                return false
            }
        })
    );
};

