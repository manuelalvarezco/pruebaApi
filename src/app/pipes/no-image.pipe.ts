import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(cliente: any  ): string {

    let url = 'https://api.phx.com.co';

    if(cliente.avatar.photo){
      return url + cliente.avatar.photo
    }else{
      
      return 'assets/img/no-image.png';
    }    
  }

}
