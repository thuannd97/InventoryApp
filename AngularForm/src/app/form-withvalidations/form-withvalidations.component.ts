import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-withvalidations',
  templateUrl: './form-withvalidations.component.html',
  styleUrls: ['./form-withvalidations.component.css']
})
export class FormWithvalidationsComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any){
    console.log('value: ', value);
  }

  skuValidator(control :FormControl): {[s: string]: boolean}{
    if(!control.value.match(/^123/)){
      return {invalidSku: true}
    }
  }

}
