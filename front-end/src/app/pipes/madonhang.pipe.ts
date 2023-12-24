import { Pipe, PipeTransform } from '@angular/core';
import { DonHang } from '../models/donhang.model';

@Pipe({
    name: 'madonhang'
})
export class MadonhangPipe implements PipeTransform {

    transform(value: DonHang[], filterString?: any): any {
        if (value.length === 0 || filterString === '') {
            return value;
        }

        const donhangs = [];
        for (const donhang of value) {
            if (donhang['maDatHang'].toLowerCase().includes(filterString.toLowerCase())) {
                donhangs.push(donhang);
            }
        }
        return donhangs;
    }

}
