import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {
  
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