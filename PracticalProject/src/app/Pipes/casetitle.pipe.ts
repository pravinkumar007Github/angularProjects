import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casetitle'
})
export class CasetitlePipe implements PipeTransform {

  transform(value: string): string {
    var glue:any;
    glue = (glue) ? glue : ['of', 'for', 'and','is','was','that'];
    return value.replace(/(\w)(\w*)/g, function(_, i, r){
        var j = i.toUpperCase() + (r != null ? r : "");
        return (glue.indexOf(j.toLowerCase())<0)?j:j.toLowerCase();
    });
  }

}
