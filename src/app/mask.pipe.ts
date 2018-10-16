import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, len: number = 5): any {
    if (value.length > len) {
      return value.substr(0, len) + '***';
    } else {
      return value;
    }
  }

}
