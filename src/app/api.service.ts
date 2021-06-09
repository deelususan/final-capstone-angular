import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url :string = "http://localhost:8080/products/";
  private url1 :string = "http://localhost:8080/";

  constructor(private httpClient:HttpClient) { }

  public getAllProducts(){
    return this.httpClient.get(this.url);
  }

  public getAllProductsByCusine(cusine:string){
    return this.httpClient.get(`${this.url}/${cusine}`);
  }

  public addProduct(product:any){
    return this.httpClient.post(`${this.url}`,product);
  }

  public updateProductById(product:any){
    return this.httpClient.put(`${this.url}`,product);
  }

  public deleteProductById(id:string){
    return this.httpClient.delete(`${this.url}deleteproduct/${id}`);
  }

  public getOneProduct(id:string){
    return this.httpClient.get(`${this.url}details/${id}`);
  }
public addUser(user:any){
  return this.httpClient.post(`${this.url1}users`,user);
}



}
