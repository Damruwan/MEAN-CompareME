import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phone:any;

  constructor(
      
     private http:Http,
     private router:Router

  ) { }

  addPhone(phone){

     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/phone/managePhone",phone,{headers:headers}).pipe(map(res=>res.json()));

  }

  getPhone(){

	  return this.http.get('http://localhost:3000/phone/managephone').pipe(map(res => res.json()));
  }


  deletePhone(id){

	  return this.http.delete('http://localhost:3000/phone/managePhone/'+id)
	    .pipe(map(res => res.json()));
  }

  viewPhone(id){

	  return this.http.get('http://localhost:3000/phone/viewPhone/'+id)
	    .pipe(map(res => res.json()));
  }

}





    
 



  

     