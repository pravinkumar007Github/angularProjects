import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  pure:false
  
})
export class FilterPipe implements PipeTransform {

  

  transform(value:any, ddlvalue:string,SeachWord:string): any {
  
    var temparray:any = [];
    if(SeachWord.length == 0)
    {
      
      return value;
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

  
    
    return temparray;
  }

}
