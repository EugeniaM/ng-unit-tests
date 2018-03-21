import { Pipe, PipeTransform } from '@angular/core';

export const defaultLimit = 10;

@Pipe({
  name: 'textSummary'
})
export class TextSummaryPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return '';

    const limit = args || defaultLimit;
    return (value.length <= limit) ? value : `${value.substr(0, limit)}...`;
  }
}
