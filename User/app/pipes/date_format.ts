import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFormat'
})

export class DateFormat implements PipeTransform {
    transform(value:any, args:string[]):any {
        if (value) {
            var date = value instanceof Date ? value : new Date(value);
            return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
        }
    }
}
