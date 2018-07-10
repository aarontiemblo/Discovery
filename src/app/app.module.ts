import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MarcasService } from './providers/services/marcas.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent, ConfiguracionComponent]
})
export class AppModule { }
