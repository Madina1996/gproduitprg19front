import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUlr= "http://localhost:8080/api";
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }


  getAllCategorie(){
    return this.http.get(baseUlr+"/categorie/liste")
  }

  

}
