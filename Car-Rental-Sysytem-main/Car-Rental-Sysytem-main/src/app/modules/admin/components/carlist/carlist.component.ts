import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListapiService } from '../listapi.service'; 
import { listModel } from './listModel'; 

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  carform!: FormGroup;
  ldata!: listModel[];

  constructor(private formbuilder: FormBuilder, private listapi: ListapiService) { }

  ngOnInit(): void {
    this.carform = this.formbuilder.group({
      id: ['', Validators.required],
      imgSrc: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      url: ['', Validators.required]
      

    })
    this.getcars();
  }

  addcars(data: listModel) {
    console.log(data)
    this.listapi.addcars(data).subscribe((res => {
      this.carform.reset();
    }))
    this.getcars();
}

  getcars() {
    this.listapi.getcars().subscribe(res => {
      this.ldata = res;
    })
  }

  deletecars(dataid: number) {
    this.listapi.deletecars(dataid).subscribe(res => {
      this.deletecars(dataid);
    })
    this.getcars();
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
