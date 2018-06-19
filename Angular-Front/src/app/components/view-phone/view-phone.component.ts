import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-view-phone',
  templateUrl: './view-phone.component.html',
  styleUrls: ['./view-phone.component.css']
})
export class ViewPhoneComponent implements OnInit {
    public id: string;
    phone: any;

  constructor(
     private phoneService:PhoneService,
     private route:  ActivatedRoute 
  ) { 
     this.route.queryParams.subscribe(params => {
            this.id = params["phone_id"];
        });
  }

  ngOnInit() {

     this.phoneService.viewPhone(this.id).subscribe(phone=>{
          this.phone = phone;
     });  
  }

}
