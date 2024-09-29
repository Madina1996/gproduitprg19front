import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit {
 
 categories:any;

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
