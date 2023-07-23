import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercount',
  pure:false
})
export class FiltercountPipe implements PipeTransform {

  transform(value:any, ddlvalue:string,SeachWord:string): number {
    var filtercount:number = 0;
    var temparray:any = [];
    if(SeachWord.length == 0)
    {
      filtercount = value.length;
      return filtercount;
    }
    
    for(var i = 0; i<value.length;i++)
    {
      if(ddlvalue == "Name")
      {
      if(value[i].Name.includes(SeachWord))
      {
        temparray.push({'Name':value[i].Name,'Price':value[i].Price,'CardNumber':value[i].CardNumber})
      }
      }
      else if(ddlvalue == "Price")
      {
      if(value[i].Price == SeachWord )
      {
        temparray.push({'Name':value[i].Name,'Price':value[i].Price,'CardNumber':value[i].CardNumber})
      }
      }
      else if(ddlvalue == "ccno")
      {
      if(value[i].CardNumber == SeachWord)
      {
        temparray.push({'Name':value[i].Name,'Price':value[i].Price,'CardNumber':value[i].CardNumber})
      }
      }

     
    }
    filtercount = temparray.length;
    return filtercount;
  }

}
