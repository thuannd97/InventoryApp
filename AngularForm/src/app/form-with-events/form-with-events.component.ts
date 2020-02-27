import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-with-events',
  templateUrl: './form-with-events.component.html',
  styleUrls: ['./form-with-events.component.css']
})
export class FormWithEventsComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) =>{
        console.log('form changed to:', form);
      }
    );

  }

  ngOnInit() {
  }

  onSubmit(value: any){
    console.log('value: ', value);
  }

}
