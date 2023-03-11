import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {

    if (!value) {
      return [];
    }
      return value.filter((searchh) => {
      return searchh.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > - 1
    });
  }
}
