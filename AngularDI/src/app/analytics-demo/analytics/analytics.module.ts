import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../analytics.service';
import { Metric, AnalyticsImplementaion } from '../analytics-demo.interface'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnalyticsService, 
      useFactory(){
        const loggingImplementation: AnalyticsImplementaion = {
          recordEvent: (metric: Metric): void =>{
            console.log('The metric is:', metric);
          }
        };
        return new AnalyticsService(loggingImplementation);
      }
    }
  ]
})
export class AnalyticsModule { }
