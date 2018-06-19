import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phones } from '../../services/phone';
import { Router, NavigationExtras } from "@angular/router";


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phones: Phones[];

  constructor(
     private phoneService:PhoneService,
     private router: Router
  ) { }

  ngOnInit() {

      this.phoneService.getPhone().subscribe(phone=>{
          this.phones = phone;

      })
  }

  viewPhone(id:any){
       let navigationExtras: NavigationExtras = {
            queryParams: {
                "phone_id": id
            }
        };
        this.router.navigate(["/viewPhone"], navigationExtras);  
  }
    
}
