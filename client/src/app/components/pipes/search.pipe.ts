import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(val => val.toString().toLowerCase().indexOf(args.toLowerCase()) > -1)
  }

}

@Pipe({
  name: 'msgPipe'
})
export class MessagePipe implements PipeTransform {

  transform(value: any, from?: any): any {
    console.log("pipe", from)
    console.log("pipe value", value)
    return value.filter(val => val.from == from || val.to == from)
  }

}
