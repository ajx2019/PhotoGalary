import { Component } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
imagePath='';
picdata: any;
picurl: any;
mypicref: any;
constructor(private camera: Camera,
private actionSheetController: ActionSheetController
){

}


//==========================

takePic() {
  this.camera.getPicture({
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.CAMERA,
    encodingType: this.camera.EncodingType.PNG,
    saveToPhotoAlbum: true
  }).then(imageData => {
    this.picdata=imageData;
    this.imagePath = 'data:image/jpeg;base64,' + imageData;
    this.upload()
  })

  }
  //==================
  
//=======================
}
