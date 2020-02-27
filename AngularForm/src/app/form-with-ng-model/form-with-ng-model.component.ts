import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-with-ng-model',
  templateUrl: './form-with-ng-model.component.html',
  styleUrls: ['./form-with-ng-model.component.css']
})
export class FormWithNgModelComponent implements OnInit {

  productName: string;

  constructor() { 
    this.productName = "ng-book: The complete book guide to Angular";
  }

  ngOnInit() {
  }

  onSubmit(value: string): void{
    console.log('u submitted value: ', value);
  }

}
