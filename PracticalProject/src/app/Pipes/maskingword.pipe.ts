import { Pipe, PipeTransform } from '@angular/core';
import { inner } from 'f-ck';

@Pipe({
  name: 'maskingword'
})
export class MaskingwordPipe implements PipeTransform {

  
  transform(value: string): string {

    var maskingwords = ["kill","shoot"];
 
    for(var i =0;i<maskingwords.length;i++)
    {
      if(value.includes(maskingwords[i]))
      {
       var replaceword = inner(maskingwords[i]);
       value = value.replace(maskingwords[i],replaceword)
      }
    }
    return value;
  }

}
