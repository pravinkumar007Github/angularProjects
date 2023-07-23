import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length == 0)
    {
      return value
    }
    var ordinal:string = "";
    var ordinalvalue:number = Number(value) %10
    if(ordinalvalue == 1)
    {
      ordinal = value.toString()+"st"
    }
    else if(ordinalvalue == 2)
    {
      ordinal = value.toString()+"nd"
    }
    else if(ordinalvalue == 3)
    {
      ordinal = value.toString()+"rd"
    }
    else
    {
      ordinal = value.toString()+"th"
    }
    
    return ordinal;
  }

}
