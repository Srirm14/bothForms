import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('userForm')
  uf!: NgForm;


  onSubmit(){
    console.log("Submited!!");
    
    }
  countryList=[
    {"countryName":"TamilNadu"},
    {"countryName":"Kerla"},
    {"countryName":"Goa"}
  ];

 

  setDefault(){
    this.uf.setValue({
      firstName:"Sriram",
      lastName:"Leo",
      mail:"sriram@gmail.com",
      password:"1sriram4",
      address:"xyz",
      address2:"abc st...",
      city:"tirupur",
      country:"Goa",
    });
    }
  
  
}
