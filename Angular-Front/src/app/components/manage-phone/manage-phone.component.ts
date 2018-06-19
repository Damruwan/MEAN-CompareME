import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Phones } from '../../services/phone';

@Component({
  selector: 'app-manage-phone',
  templateUrl: './manage-phone.component.html',
  styleUrls: ['./manage-phone.component.css']
})
export class ManagePhoneComponent implements OnInit {

        phones: Phones[];

        phonepicture : String;
        model : String;
        technology : String;
        announced : String;
        status : String;
        dimensions : String;
        weight : String;
        sim : String;
        displayType : String;
        displaySize : String;
        displayResolution : String;
        multitouch : String;
        os : String;
        chipset : String;
        cpu : String;
        gpu : String;
        cardslot: String;
        internalMemory: String;
        primaryCamera: String;
        cameraFeatures: String;
        video: String;
        secondaryCamera: String;
        alertTypes: String;
        loudspeaker : String;
        audiojack : String;
        wlan: String;
        bluetooth: String;
        gps: String;
        nfc: String;
        radio: String;
        usb: String;
        sensors: String;
        messaging: String;
        browser: String;
        battery: String;
        colors: String;
        price: String;

        
  constructor(
        
      private phoneService:PhoneService,
      private flashMessage:FlashMessagesService,
      private router:Router

  ) { }

  ngOnInit() {
 
       this.phoneService.getPhone().subscribe(phone=>{
          this.phones = phone;

       })
  }

  addPhone(){
    
    const phone = {
        phonepicture : this.phonepicture,
        model : this.model,
        technology : this.technology,
        announced : this.announced,
        status : this.status,
        dimensions : this.dimensions,
        weight : this.weight,
        sim : this.sim,
        displayType : this.displayType,
        displaySize : this.displaySize,
        displayResolution : this.displayResolution,
        multitouch : this.multitouch,
        os : this.os,
        chipset : this.chipset,
        cpu : this.cpu,
        gpu : this.gpu,
        cardslot: this.cardslot,
        internalMemory: this.internalMemory,
        primaryCamera: this.primaryCamera,
        cameraFeatures: this.cameraFeatures,
        video: this.video,
        secondaryCamera: this.secondaryCamera,
        alertTypes: this.alertTypes,
        loudspeaker : this.loudspeaker,
        audiojack : this.audiojack,
        wlan: this.wlan,
        bluetooth: this.bluetooth,
        gps: this.gps,
        nfc: this.nfc,
        radio: this.radio,
        usb: this.usb,
        sensors: this.sensors,
        messaging: this.messaging,
        browser: this.browser,
        battery: this.battery,
        colors: this.colors,
        price: this.price
    };

    this.phoneService.addPhone(phone).subscribe(phone=>{
         this.phones.push(phone);
         this.phoneService.getPhone().subscribe(phone=>{
             this.phones = phone;
         }); 
    });               

 }

 deletePhone(id:any)
  {
    var phone = this.phones;
    this.phoneService.deletePhone(id).subscribe(data =>{
            if(data.n==1)
            {
              for(var i =0; i< phone.length; i++)
              {
                if(phone[i]._id == id)
                {
                   phone.splice(i,1);
                }
              }
            }
        })
  }

}
