import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  uname:String;
  upass:String;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  LoginUser() {
   
    if (this.uname === 'user' && this.upass === 'user1') {
      console.log("Valid Credentials");
      this.router.navigateByUrl('/order');
    } else {
      alert("Please check your login credentials and try again")

    }
  }

}
