import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './body/acerca-de/acerca-de.component';
import { HabilildadesComponent } from './body/habilildades/habilildades.component';
import { EducacionComponent } from './body/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AcercaDeComponent,
    HabilildadesComponent,
    EducacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "outerStrokeColor": "#54b526",
      "showTitle": false,
      "showSubtitle": false,
      "showUnits": false,
      "showImage": true,
      "lazy": true,
      "showBackground": true,
      "backgroundColor": "transparent",
      "imageSrc": "/assets/PNG/lang-logo"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
