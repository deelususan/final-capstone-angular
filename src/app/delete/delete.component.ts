import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService:ApiService,private router :Router) { }

  public id: string ;
  products:any;

  ngOnInit(): void {


  }

}
