import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userregnform :FormGroup;
  submitted: boolean;

  constructor(private formBuilder:FormBuilder, private apiService:ApiService,private router :Router) { }

  ngOnInit(): void {
    this.userregnform = this.formBuilder.group({
      fname : ['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      lname :['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      address: ['',[Validators.required]],
      phone :['',Validators.required],
      uname :['',Validators.required],
      upass :['',Validators.required]
    });
  }
  public hasError(field:any){
    return (this.userregnform.get(field).invalid && this.userregnform.get(field).touched 
    && this.userregnform.get(field).errors);
  }

  public submitForm(form:any){
    if(form.valid) {
      this.submitted  = true;
      this.apiService.addUser(this.userregnform.value).subscribe(res=> {
        console.log(res);
        this.router.navigateByUrl('/allproducts')

      
      })
    } else{
      this.validateForm(form);
    }
    console.log(this.userregnform.value);
  }

  
  validateForm(form:any){
    Object.keys(form.controls).forEach(field=>{
      const control = form.get(field);
      if( control instanceof FormControl){
        control.markAsTouched({ onlySelf : true })
      } else{
        this.validateForm(control);
      }
    })
  }

    get fname() { return this.userregnform.get('fname')}
    get lname() { return this.userregnform.get('lname')}
    get address() { return this.userregnform.get('address')}
    get phone() { return this.userregnform.get('phone')}
    get uname() { return this.userregnform.get('uname')}
    get upass() { return this.userregnform.get('upass')}
  }

  

  




