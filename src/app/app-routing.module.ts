import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [

  {path:'categorie',component: CategorieComponent},
  {path:'produit',component: ProduitComponent},
  {path:'mouvement',component: MouvementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
