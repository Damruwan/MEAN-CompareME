import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  brand = ["","acer","Dell","hp"];
  price = ["","less than 50000","less than 70000","less than 100000"];

  constructor() {}

  ngOnInit() {
  }


state = true;

stateChanger(){
	this.state = !this.state;
}

}