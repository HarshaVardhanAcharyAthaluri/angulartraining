import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isadult'
})
export class IsadultPipe implements PipeTransform {

  transform(value: number): string {
   if(value>18){
    return 'Adult';
   }
   
    return 'Not Adult';
  }

}
