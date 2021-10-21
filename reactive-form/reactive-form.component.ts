import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm=[];
  constructor() { }

  userForm!:FormGroup;
  countryList=[
    {"countryName":"India"},
    {"countryName":"Australlia"}
  ]
  ngOnInit() {

    this.userForm=new FormGroup({
      'fname':new FormControl(null,Validators.required),
      'lname':new FormControl(null,Validators.required),
      'uname':new FormControl(null),
      'city':new FormControl(null),
      'state':new FormControl(null),
      'zip':new FormControl(null),


    });
  }
  onPush(){
    const fname=this.userForm.get('fname')?.value;
    const lname=this.userForm.get('lname')?.value;
    const uname=this.userForm.get('uname')?.value;
    const city=this.userForm.get('city')?.value;
  }

 


}
