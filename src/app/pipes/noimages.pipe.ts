import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {

  transform(imgs: any[]): string {
    if (!imgs) {
      return 'assets/img/noimage.png';
    }
    if (imgs.length > 0) {
      return imgs[0].url;
    } else {
      return 'assets/img/noimage.png'
    } 
  }

}
