import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  public  products :any;
  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    // load get all products
    this.getAllProducts();
  }
  public getAllProducts(){
    this.apiservice.getAllProducts().subscribe( data => {
    console.log(data);
      this.products = data;
    });
  }

  details(p_id){
    this.router.navigateByUrl('/products/details/'+p_id);
  }
  
  addtocart(p_id){

  }
  checkout(){}
}
