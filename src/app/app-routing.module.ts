import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcervoComponent } from './acervo/acervo.component';
import { GruposComponent } from './grupos/grupos.component';
import { HeroisComponent } from './herois/herois.component';
import { HomeComponent } from './home/home.component';
import { ViloesComponent } from './viloes/viloes.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'herois', component: HeroisComponent},
  {path:'viloes', component: ViloesComponent},
  {path:'grupos', component: GruposComponent},
  {path:'acervo', component: AcervoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
