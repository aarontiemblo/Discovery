import { MarcasService } from '../providers/services/marcas.service';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
  providers: [HttpModule]
})
export class ConfiguracionComponent implements OnInit {
  datosData: Observable<object>;
  public marcas: boolean;
  public url: string;
  public datos: string;
  public urlImageDispositivo: string;
  public dispositivo: string;
  public marca: string;
  public seccionMarcas: string;

  constructor(private http: HttpClient, private respuestaMarcas: MarcasService) { }

  ngOnInit() {
    this.marcas = true;
    this.url = 'http://wm-api.com/devices?api-key=8b2f69b4-2de7-473d-a67d-7101228fb063&version=2';
    this.datosData = this.respuestaMarcas.getMarcas();
    this.datosData.subscribe(res => {
        this.datos = JSON.stringify(res);
    },
      error => {
        console.log('Error al realizar la petición');
      },
      () => {
        console.log('OK al realizar la petición');
        let datosParsed = JSON.parse(this.datos);
        console.log(this.datos);
//        let datosParsed = JSON.parse(this.datos);
//        this.urlImageDispositivo = datosParsed[0].PromotionalImages[0].ImageUrl;
//        this.dispositivo = datosParsed[0].Name;
//        this.marca = datosParsed[0].ManufacturerName;
//        this.seccionMarcas = this.marca;
      }
    );
  }
//  showDevices(){
//    this.marcas = false;
//  } 
//  searchMarcas() {
//    this.respuestaMarca.getMarcas(this.marca);
//  }
}
