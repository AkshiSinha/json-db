import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {DataServiceService} from '../data-service.service';
import {emp} from '../employee.module';
//import { FormArray } from '@angular/forms/src/model';


@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.scss']
})
export class ReactiveFormComponentComponent implements OnInit {

  SERVER_URL = "http://localhost:3000/employee";
  registrationForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private postService:DataServiceService) { 
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
        ]),
      
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)        
      ])
    });



  }

  ngOnInit() {
  }
  onRegistrationFormSubmit() {
    this.isSubmitted = true;

    if(this.registrationForm.valid){      
      console.log("User Registration Form Submit", this.registrationForm.value);
    }
    

    this.postService.enroll(this.registrationForm.value).subscribe(res =>
      {if(res){
        console.log(res);
      }}); 
  }
}
