import { Component, OnInit } from '@angular/core';
import { CategorieService } from './service/categorie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit  {
  title = 'gproduitfront';
  categories: any;
 

  constructor(private catService: CategorieService){ }

  ngOnInit(): void {
    this.getCategories()
 }
 getCategories(){ 
   this.catService.getAllCategorie().subscribe({
     next:(param:any)=>{ 
       this.categories = param;
       console.log(param);
     },
     error:(err:any)=>{console.log(err)},
   });
 }
}
