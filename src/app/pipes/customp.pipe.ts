import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customp'
})
export class CustompPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    if(value!=null){
      return value.substr(0,2);
    }

    return null;
  }
}
