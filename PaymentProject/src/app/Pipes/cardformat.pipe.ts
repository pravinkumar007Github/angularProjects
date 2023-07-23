import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardformat'
})
export class CardformatPipe implements PipeTransform {

  transform(value: string): string {
    return "************" +  value.substring(15,19) 
  }

}
