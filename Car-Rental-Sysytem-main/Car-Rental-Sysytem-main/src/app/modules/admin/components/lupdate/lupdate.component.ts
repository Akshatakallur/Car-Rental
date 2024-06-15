import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListapiService } from '../listapi.service'; 
import { listModel } from '../carlist/listModel';

@Component({
  selector: 'app-lupdate',
  templateUrl: './lupdate.component.html',
  styleUrls: ['./lupdate.component.css']
})
export class LupdateComponent {
  public dataid!: number;
  public cars!: | listModel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private listapi: ListapiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.listapi.fetchdata(this.dataid).subscribe((data: listModel) => {
      this.cars = data;
    })
  }

  lupdate() {
    this.listapi.lupdate(this.cars, this.dataid).subscribe((res: listModel) => {
      this.router.navigate(["admin/carlist"])
    })
  }

}

