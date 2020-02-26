import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-form-builder',
  templateUrl: './demo-form-sku-with-form-builder.component.html',
  styleUrls: ['./demo-form-sku-with-form-builder.component.css']
})
export class DemoFormSkuWithFormBuilderComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string){
    console.log('you submitted value: ', value);
  }

}
