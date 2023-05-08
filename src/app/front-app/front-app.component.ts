import { Component, OnInit } from '@angular/core';
import { FrontAppService } from "./front-app.service";

@Component({
  selector: 'app-front-app',
  templateUrl: './front-app.component.html',
  styleUrls: ['./front-app.component.css']
})
export class FrontAppComponent implements OnInit {

  author: string | undefined;
  nombreMaquina: string | undefined;
  fechaMaquina: string | undefined;
  machineInfo: any;

  constructor(private frontAppService: FrontAppService) { }

  ngOnInit(): void {
    this.author = "Jose Alexander Romero - 201924738"
    this.nombreMaquina = window.location.hostname;
    this.fechaMaquina = new Date().toLocaleString();

    console.log(this.fechaMaquina);

    this.frontAppService.getMachineInfo().subscribe(data => {
      this.machineInfo = data
      console.log(this.machineInfo.Nombre)
    });

  }

}
