import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxpipe'
})
export class UxpipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    const v=value;
    return value.toUpperCase();
  }

}
