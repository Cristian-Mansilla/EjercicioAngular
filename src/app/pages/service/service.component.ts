import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public servicios = [
    'servicio1',
    'servicio2',
    'servicio3',
    'servicio4',
    'servicio5',
    'servicio6'
  ]

  constructor() { }

  ngOnInit() {
  }

}
