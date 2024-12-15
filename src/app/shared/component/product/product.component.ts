import { Component, OnInit } from '@angular/core';
import { Iemp } from '../../module/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  LangArr : Array<string> = ["Html", "css", "Javascript", "Angular", "Bootstrap", "Nodejs"]

EmployeArr : Array<Iemp> = [
  {
    fname : "Soham",
    lname : "Swami",
    email : "ss13@gmail.com",
    contact : 1232145467,
  },
  {
    fname : "Vishnu",
    lname : "Natwarlal",
    email : "vn13@gmail.com",
    contact : 3487654312,
  },
  {
    fname : "Sachin",
    lname : "Dev",
    email : "sd13@gmail.com",
    contact : 9866094534,
  },
  {
    fname : "Krish",
    lname : "Datt",
    email : "kd13@gmail.com",
    contact : 9834126789,
  },
  {
    fname : "Neha",
    lname : "Koli",
    email : "nk13@gmail.com",
    contact : 91674523,
  },
  {
    fname : "Janvi",
    lname : "Pande",
    email : "jp13@gmail.com",
    contact : 1286459700,
  },
  {
    fname : "Poonam",
    lname : "Lokhande",
    email : "pl13@gmail.com",
    contact : 4387653098,
  },

]

  constructor() { }

  ngOnInit(): void {
  }

}
