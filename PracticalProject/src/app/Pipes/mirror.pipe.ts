import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mirror'
})
export class MirrorPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
