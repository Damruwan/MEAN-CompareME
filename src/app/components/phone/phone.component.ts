import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  brand = ["","Samsung","Nokia","Oppo"];
  price = ["","less than 10000","less than 20000","less than 30000"];


  constructor() {}

  ngOnInit() {
  }


state = true;

stateChanger(){
	this.state = !this.state;
}

}