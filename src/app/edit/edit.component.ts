import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id: string ;
  public productForm :FormGroup;
  products:any

  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private router: Router, private apiService:ApiService) { }


  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      cusine : ['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      name :['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      desc: ['',[Validators.required]],
      price:['',Validators.required]
    });

  }

    public submitForm(form:any) {
      this.apiService.updateProductById(this.products)
      .subscribe(data => {
        console.log(data);
       // this.router.navigate(['/admin']);
      }, error => console.log(error));
  } 

    }



