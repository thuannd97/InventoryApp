import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithFormBuilderComponent } from './demo-form-sku-with-form-builder/demo-form-sku-with-form-builder.component';
import { FormWithvalidationsComponent } from './form-withvalidations/form-withvalidations.component';
import { FormWithEventsComponent } from './form-with-events/form-with-events.component';
import { FormWithNgModelComponent } from './form-with-ng-model/form-with-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithFormBuilderComponent,
    FormWithvalidationsComponent,
    FormWithEventsComponent,
    FormWithNgModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
