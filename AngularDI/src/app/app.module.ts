import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserDemoComponent } from './DI/user-demo/user-demo.component';
import { AnalyticsComponent } from './analytics-demo/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserDemoComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
