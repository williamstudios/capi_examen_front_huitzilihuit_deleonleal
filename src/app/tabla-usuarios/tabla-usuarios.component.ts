import { Component, OnInit } from '@angular/core';
//import { AppModule } from '../app.module';
import { Observable } from 'rxjs';
import { RequestServiceService } from 'src/app/request-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  constructor(
    private readonly requestService: RequestServiceService,
  ){

  }
  public getusersAll:any = [];
  ngOnInit(): void{
    this.getCarros();
  }

  async getCarros(){
   
    const params = {
      IdSite: 1,
      IdUserCreate: 2,
    }
   
    this.requestService.getAll().subscribe(res =>{
      console.log(res)
      this.getusersAll = res; 
    })
  }
}