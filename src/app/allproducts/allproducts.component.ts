import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {


  public products: any;
  cusine: any;
  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    // load get all products
    this.getAllProducts();
  }

  public getAllProducts() {
    this.apiservice.getAllProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  Search() {
    if (this.cusine == "") {
      this.ngOnInit();
    } else {
      this.products = this.products.filter(res => {
        return res.cusine.toLocaleLowerCase().match(this.cusine.toLocaleLowerCase());
      })
    }

  }

  edit() {
    this.router.navigateByUrl('/updateproduct');
  }

  details(p_id) {
    this.router.navigateByUrl('/products/details/' + p_id);
  }

}


