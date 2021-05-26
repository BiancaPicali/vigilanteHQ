import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EndComponent } from './end/end.component';
import { ChooseComponent } from './choose/choose.component';
import { AcervoComponent } from './acervo/acervo.component';
import { HeroisComponent } from './herois/herois.component';
import { ViloesComponent } from './viloes/viloes.component';
import { GruposComponent } from './grupos/grupos.component';
import { AcervComponent } from './acervo/acerv/acerv.component';
import { AcervoService } from './acervo/acervo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EndComponent,
    ChooseComponent,
    AcervoComponent,
    HeroisComponent,
    ViloesComponent,
    GruposComponent,
    AcervComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AcervoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
