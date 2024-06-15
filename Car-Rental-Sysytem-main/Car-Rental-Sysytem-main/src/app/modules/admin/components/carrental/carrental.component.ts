import { Component, OnInit } from '@angular/core';
import { ListapiService } from '../listapi.service';
import { listModel } from '../carlist/listModel'; 

@Component({
  selector: 'app-carrental',
  templateUrl: './carrental.component.html',
  styleUrls: ['./carrental.component.css']
})
export class CarrentalComponent implements OnInit {
  ldata!: listModel[];
 

  constructor(private listapi: ListapiService) { }

  ngOnInit(): void {
    this.getcars();
  }

  getcars() {
    this.listapi.getcars().subscribe(res => {
      this.ldata = res;
    })
  }

  searchCars(event: any) {
    console.log(event.target.value);

    if (event.target.value) {
      this.listapi.searchCars(event.target.value).subscribe(res => {
        this.ldata = res;
      })
    } else {
      this.getcars();
    }

  }

}
