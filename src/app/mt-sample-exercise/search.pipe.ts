import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'farmFilter',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =
        val.FarmNo.toLocaleLowerCase().includes(args) ||
        val.ActiveDate.includes(args);
      return rVal;
    });
  }
}
